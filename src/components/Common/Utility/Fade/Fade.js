import React from 'react';

export default function Fade({ show, children, callback }) {
  const shouldRender = true;

  const onAnimationEnd = () => {
    callback();
  };

  return (
    shouldRender && (
      <div
        style={{ animation: `${show ? 'fadeIn' : 'fadeOut'} 2s` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
}
