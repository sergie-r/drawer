import { render, screen } from '@testing-library/react';
import LineList from './LinesList';

describe('LinesList', () => {
  it('should render linesList correctly', () => {
      render(
        <LineList
          lines={[{
            lineStart: {x:1, y:1},
            lineEnd: {x:2, y:2},
          }]}
        />
      );

      const canvasElement = screen.getByTestId('line-list');
      expect(canvasElement).toBeInTheDocument();
  });
});
