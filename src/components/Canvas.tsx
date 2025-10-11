import { useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const updateCanvasDimensions = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      // setup canvas dimensions
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      if (context) {
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  useEffect(() => {
    updateCanvasDimensions(); // Initial setup
    window.addEventListener('resize', updateCanvasDimensions);

    return () => {
      window.removeEventListener('resize', updateCanvasDimensions);
    };
  }, []);

  return (
    <canvas id="sky" style={{width: '100%', height: '100%'}} ref={canvasRef} />
  );
};

export default Canvas;
