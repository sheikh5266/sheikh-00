import React from "react";

export const GlobeLoader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal flex items-center justify-center">
      <div className="globe-loader-container">
        <div className="globe-section-path">
          <div className="globe-ball">
            <div className="globe-wrapper">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        
        <div className="globe-switch">
          <div className="globe-circle"></div>
        </div>
        
        <p className="mt-5 text-foreground/80 globe-text">
          <span>Loading</span>
          <span>Please Wait</span>
        </p>
      </div>
    </div>
  );
};