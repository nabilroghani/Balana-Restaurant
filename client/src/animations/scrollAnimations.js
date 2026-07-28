import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initVideoScrollExperience = (containerRef) => {
  // Clear any pre-existing ScrollTrigger instances to prevent duplication
  ScrollTrigger.getAll().forEach((t) => t.kill());

  if (!containerRef.current) return;

  const isMobile = window.innerWidth < 768;

  // Build Master Video Scrub Timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'top top',
      end: isMobile ? '+=200%' : '+=300%',
      pin: true,
      scrub: 1,
      anticipatePin: 1,
    },
  });

  // SCENE 1 -> SCENE 2
  tl.to('.hero-scene-1-bg', {
    scale: 1.25,
    duration: 1,
    ease: 'power2.inOut',
  }, 0)
  .to('.hero-scene-1-text', {
    opacity: 0,
    y: -40,
    duration: 0.8,
    ease: 'power2.in',
  }, 0.5)
  .to('.hero-scene-2-bg', {
    opacity: 1,
    scale: 1.15,
    duration: 1,
    ease: 'power2.inOut',
  }, 0.6)
  .fromTo('.hero-scene-2-text', {
    opacity: 0,
    y: 50,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
  }, 0.8);

  // SCENE 2 -> SCENE 3
  tl.to('.hero-scene-2-bg', {
    scale: 1.3,
    duration: 1,
    ease: 'power2.inOut',
  }, 1.6)
  .to('.hero-scene-2-text', {
    opacity: 0,
    y: -40,
    duration: 0.8,
    ease: 'power2.in',
  }, 1.8)
  .to('.hero-scene-3-bg', {
    opacity: 1,
    scale: 1.1,
    duration: 1,
    ease: 'power2.inOut',
  }, 2.0)
  .fromTo('.hero-scene-3-text', {
    opacity: 0,
    y: 50,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
  }, 2.2);

  // SCENE 3 -> Final light sweep
  tl.to('.hero-light-sweep', {
    x: '200%',
    duration: 1.2,
    ease: 'power2.inOut',
  }, 2.8)
  .to('.hero-scene-3-bg', {
    scale: 1.2,
    filter: 'brightness(0.7)',
    duration: 1,
  }, 2.8);

  // Refresh all ScrollTriggers after setup
  ScrollTrigger.refresh();
};

// Cleanup function for React component unmount
export const cleanupScrollAnimations = () => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
};
