export type Coordinate = {
  x: number;
  y: number;
};

export type Lines = {
  lineStart: Coordinate | undefined;
  lineEnd: Coordinate | undefined;
}

export type CanvasSize = {
  width: number;
  height: number;
}