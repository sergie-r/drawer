import { Coordinate } from '../types';

export const roundCoords = (coord: Coordinate | undefined) => {
  if (!coord) return '';
  return `${Math.round(coord.x)}, ${Math.round(coord.y)}`;
}