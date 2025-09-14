import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (
  animationClass: string = 'animate-reveal',
  options: ScrollAnimationOptions = {}
) => {
  const elementRef = useRef<HTMLElement>(null);
  // Animations disabled - return static ref
  return elementRef;
};

export const useStaggeredAnimation = (
  selector: string = '.stagger-item',
  delay: number = 100
) => {
  const containerRef = useRef<HTMLElement>(null);
  // Animations disabled - return static ref
  return containerRef;
};

export const useParallaxEffect = () => {
  const elementRef = useRef<HTMLElement>(null);
  // Parallax disabled - return static ref
  return elementRef;
};

export const useCursorAnimation = () => {
  // Cursor animation disabled
};