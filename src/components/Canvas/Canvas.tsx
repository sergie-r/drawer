import React, { useRef, useState, useEffect, useCallback } from "react";
import { Coordinate, Lines, CanvasSize } from '../../types';
import { getCoordinates } from '../../utils/getCoordinates';

interface CanvasProps {
  onSetLines: (lines: Lines) => void,
  canvasSize: CanvasSize
}

const Canvas: React.FC<CanvasProps> = ({onSetLines, canvasSize}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined);
  const [mouseStartPosition, setMouseStartPosition] = useState<Coordinate | undefined>(undefined);
  const [isPainting, setIsPainting] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const coordinates = getCoordinates(e, canvasRef.current);
    if (coordinates) {
        setMousePosition(coordinates);
        setMouseStartPosition(coordinates);
        setIsPainting(true);
    }
};

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isPainting && canvasRef.current) {
      const newMousePosition = getCoordinates(e, canvasRef.current);
      if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);
      }
  }
  }, [isPainting, mousePosition]);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isPainting && canvasRef.current) {
      setIsPainting(false);
      setMousePosition(undefined);
      onSetLines({lineStart: mouseStartPosition, lineEnd: getCoordinates(e, canvasRef.current)})
    }
}, [mouseStartPosition, onSetLines, isPainting]);

  const drawLine = (originalMousePosition: Coordinate, newMousePosition: Coordinate) => {
    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');
    if (context) {
        context.strokeStyle = 'red';
        context.lineJoin = 'round';
        context.lineWidth = 5;
        context.beginPath();
        context.moveTo(originalMousePosition.x, originalMousePosition.y);
        context.lineTo(newMousePosition.x, newMousePosition.y);
        context.closePath();
        context.stroke();
    }
};
 
  useEffect(() => {
    const canvas = canvasRef.current;
    
    if (!canvas) return;

    const context = canvas.getContext('2d');

    if (!context) return;

    context.fillStyle = '#224745'
    context.fillRect(0, 0, 1200 ,800)
  }, []);

  return (
    <div>
      <canvas
        data-testid="canvas" 
        width={1200}
        height={800} 
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
        }} 
        ref={canvasRef} 
        onMouseDown={handleMouseDown} 
        onMouseMove={handleMouseMove} 
        onMouseUp={handleMouseLeave} 
        onMouseLeave={handleMouseLeave} 
      />
    </div>
  )
}

export default Canvas;