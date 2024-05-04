import { render, screen } from '@testing-library/react';
import {setupJestCanvasMock} from 'jest-canvas-mock';
import Canvas from './Canvas';

describe('Canvas', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    setupJestCanvasMock();
});
  it('should render canvas correctly', () => {
      render(
        <Canvas
            canvasSize={{width: 900, height: 600}}
            onSetLines={() => {}}
        />
      );

      const canvasElement = screen.getByTestId('canvas');
      expect(canvasElement).toBeInTheDocument();
  });
});
