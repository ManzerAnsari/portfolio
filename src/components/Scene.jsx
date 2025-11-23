import React, { useRef, useEffect, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useAnimations, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedRobot() {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/RobotExpressive.glb');
  const { actions } = useAnimations(animations, group);
  const { pointer } = useThree();
  const headRef = useRef();
  
  // Define animation categories (following GitHub example)
  const states = ['Idle', 'Walking', 'Running', 'Dance', 'Sitting', 'Standing', 'Death'];
  const emotes = ['Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp'];
  
  // Current state tracking
  const [currentState, setCurrentState] = React.useState('Walking');
  const activeActionRef = useRef(null);
  const stateTimerRef = useRef(null);
  const emoteTimerRef = useRef(null);
  const expressionTimerRef = useRef(null);
  
  // Get head reference for expressions
  useEffect(() => {
    if (scene) {
      // Store reference to head for expressions
      headRef.current = scene.getObjectByName('Head_4');
    }
  }, [scene]);
  
  // Configure one-time animations for emotes
  useEffect(() => {
    if (!actions) return;
    
    const oneTimeActions = [...emotes, 'Death', 'Sitting', 'Standing'];
    
    Object.keys(actions).forEach(name => {
      const action = actions[name];
      if (oneTimeActions.includes(name)) {
        action.clampWhenFinished = true;
        action.loop = THREE.LoopOnce;
      }
    });
  }, [actions]);
  
  // GitHub-style fadeToAction function
  const fadeToAction = useCallback((name, duration) => {
    if (!actions || !actions[name]) return;
    
    const previousAction = activeActionRef.current;
    const activeAction = actions[name];
    
    if (previousAction && previousAction !== activeAction) {
      previousAction.fadeOut(duration);
    }
    
    activeAction
      .reset()
      .setEffectiveTimeScale(1)
      .setEffectiveWeight(1)
      .fadeIn(duration)
      .play();
    
    activeActionRef.current = activeAction;
  }, [actions]);
  
  // Function to play an emote and return to current state
  const playEmote = useCallback((emoteName) => {
    const previousState = currentState;
    
    fadeToAction(emoteName, 0.2);
    
    // Listen for animation finished event to restore state
    const restoreState = () => {
      if (actions && actions[emoteName]) {
        actions[emoteName].getMixer().removeEventListener('finished', restoreState);
        fadeToAction(previousState, 0.2);
      }
    };
    
    if (actions && actions[emoteName]) {
      actions[emoteName].getMixer().addEventListener('finished', restoreState);
    }
  }, [currentState, fadeToAction, actions]);
  
  // Helper to get random item from array
  const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  
  // Helper to get random interval
  const getRandomInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // Automatic state changing
  useEffect(() => {
    if (!actions) return;
    
    const changeState = () => {
      const newState = getRandomItem(states);
      setCurrentState(newState);
      fadeToAction(newState, 0.5);
      
      // Schedule next state change (5-10 seconds)
      stateTimerRef.current = setTimeout(changeState, getRandomInterval(5000, 10000));
    };
    
    // Start with initial state
    fadeToAction('Walking', 0.5);
    
    // Schedule first state change
    stateTimerRef.current = setTimeout(changeState, getRandomInterval(5000, 10000));
    
    return () => {
      if (stateTimerRef.current) clearTimeout(stateTimerRef.current);
    };
  }, [actions, fadeToAction]);
  
  // Automatic emote playing
  useEffect(() => {
    if (!actions) return;
    
    const triggerEmote = () => {
      const randomEmote = getRandomItem(emotes);
      playEmote(randomEmote);
      
      // Schedule next emote (10-20 seconds)
      emoteTimerRef.current = setTimeout(triggerEmote, getRandomInterval(10000, 20000));
    };
    
    // Schedule first emote
    emoteTimerRef.current = setTimeout(triggerEmote, getRandomInterval(10000, 20000));
    
    return () => {
      if (emoteTimerRef.current) clearTimeout(emoteTimerRef.current);
    };
  }, [actions, playEmote]);
  
  // Automatic expression changing
  useEffect(() => {
    if (!headRef.current || !headRef.current.morphTargetDictionary) return;
    
    const expressions = Object.keys(headRef.current.morphTargetDictionary);
    
    const changeExpression = () => {
      if (!headRef.current) return;
      
      // Reset all expressions first
      expressions.forEach((_, i) => {
        headRef.current.morphTargetInfluences[i] = 0;
      });
      
      // Randomly activate 1-2 expressions
      const numExpressions = Math.random() > 0.5 ? 1 : 2;
      for (let i = 0; i < numExpressions; i++) {
        const randomIndex = Math.floor(Math.random() * expressions.length);
        const randomIntensity = Math.random() * 0.8 + 0.2; // 0.2 to 1.0
        headRef.current.morphTargetInfluences[randomIndex] = randomIntensity;
      }
      
      // Schedule next expression change (3-7 seconds)
      expressionTimerRef.current = setTimeout(changeExpression, getRandomInterval(3000, 7000));
    };
    
    // Schedule first expression change
    expressionTimerRef.current = setTimeout(changeExpression, getRandomInterval(3000, 7000));
    
    return () => {
      if (expressionTimerRef.current) clearTimeout(expressionTimerRef.current);
    };
  }, [scene]);
  
  // Click-and-drag rotation state
  const isDragging = useRef(false);
  const previousMouseX = useRef(0);
  const targetRotation = useRef(0);
  
  // Handle mouse events for rotation
  useEffect(() => {
    const handleMouseDown = (e) => {
      isDragging.current = true;
      previousMouseX.current = e.clientX;
    };
    
    const handleMouseUp = () => {
      isDragging.current = false;
    };
    
    const handleMouseMove = (e) => {
      if (isDragging.current) {
        const deltaX = e.clientX - previousMouseX.current;
        targetRotation.current += deltaX * 0.01; // Sensitivity: adjust multiplier as needed
        previousMouseX.current = e.clientX;
      }
    };
    
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Apply rotation smoothly
  useFrame(() => {
    if (group.current) {
      // Smoothly interpolate to target rotation
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetRotation.current,
        0.1
      );
    }
  });

  return (
    <primitive 
      ref={group} 
      object={scene} 
      position={[4, -1.5, 0]} 
      scale={1.15}
      rotation={[0, 0, 0]}
    />
  );
}

function GradientBackground() {
  return (
    <>
      {/* Glowing grid on floor - much more visible */}
      <gridHelper 
        args={[100, 40, '#4488ff', '#2244aa']} 
        position={[0, -3, 0]} 
      />
      
      {/* Subtle circles for depth */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.99, 0]}>
        <ringGeometry args={[5, 6, 32]} />
        <meshBasicMaterial color="#3366cc" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.99, 0]}>
        <ringGeometry args={[10, 11, 32]} />
        <meshBasicMaterial color="#2255bb" transparent opacity={0.2} />
      </mesh>
    </>
  );
}

function MouseLight() {
  const lightRef = useRef();
  useFrame((state) => {
    const { pointer } = state;
    if (lightRef.current) {
      lightRef.current.position.x = pointer.x * 10;
      lightRef.current.position.y = pointer.y * 10;
    }
  });
  return <pointLight ref={lightRef} position={[0, 0, 5]} intensity={2} color="#06B6D4" distance={10} decay={2} />;
}

export default function Scene() {
  return (
    <>
      {/* Dark blue to black gradient */}
      <color attach="background" args={['#0a0a1a']} />
      <fog attach="fog" args={['#0a0a1a', 15, 50]} />
      
      <PerspectiveCamera makeDefault position={[0, 1, 8]} />
      
      {/* Lighting Setup */}
      <hemisphereLight args={[0xffffff, 0x8d8d8d, 3]} position={[0, 20, 0]} />
      <directionalLight args={[0xffffff, 3]} position={[0, 20, 10]} />
      
      {/* Gradient background */}
      <GradientBackground />
      
      {/* Interactive Mouse Light */}
      <MouseLight />
      
      <AnimatedRobot />
    </>
  );
}

// Preload the model
useGLTF.preload('/models/RobotExpressive.glb');
