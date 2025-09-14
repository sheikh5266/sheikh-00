import React from 'react';

// Static background component - animations disabled
export const AnimatedBackground = () => {
  return null;
};

// Static page transition - animations disabled  
export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Static refresh animation - disabled
export const RefreshAnimation = ({ isVisible }: { isVisible: boolean }) => {
  return null;
};

export default AnimatedBackground;