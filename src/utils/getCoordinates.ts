
import { Coordinate } from '../types';

export const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement>, canvasRef: HTMLCanvasElement): Coordinate | undefined => {
  const DOMrect = canvasRef.getBoundingClientRect();
  const scaleX = canvasRef.width / DOMrect.width;
  const scaleY = canvasRef.height / DOMrect.height;
  const x = (e.clientX - DOMrect.left) * scaleX;
  const y = (e.clientY - DOMrect.top) * scaleY;

  return {x, y};
};