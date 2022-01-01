import React, { useRef, useEffect } from 'react';

const Canvas = () => {

  const w = window.innerWidth;
  const h = window.innerHeight;
  const canvas = useRef();

  React.useEffect( () => {
    const ctx = canvas.current.getContext('2d');
    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, 2 * Math.PI);
    ctx.fill();
  });

  return (
    <div>
      <canvas
        id="game-canvas"
        width={w}
        height={h}
        ref={canvas}
      ></canvas>
    </div>
  );
}

export default Canvas;
