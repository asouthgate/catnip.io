import React, { useRef, useEffect } from 'react';

const Canvas = () => {

  const w = window.innerWidth;
  const h = window.innerHeight;
  const cnvs = useRef();

  useEffect( () => {
    const ctx = cnvs.current.getContext('2d');
    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, 2 * Math.PI);
    ctx.fill();
  });
  
  const mouseIsMoving = (e) => {
    const canvas = document.getElementById('game-canvas');
    const mousePos = mousePosition(canvas, e);
    console.log("mouse is at: " + mousePos.x + ", " + mousePos.y);
  }

  const mousePosition = (canvas, e) => {
    var rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }

  return (
    <div>
      <canvas
        id="game-canvas"
        ref={cnvs}
        width={w}
        height={h}
        onMouseMove={mouseIsMoving}
      ></canvas>
    </div>
  );
}

export default Canvas;
