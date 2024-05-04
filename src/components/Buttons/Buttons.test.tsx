import { render, screen } from '@testing-library/react';
import Buttons from './Buttons';

describe('LinesList', () => {
  it('should render buttons correctly', () => {
    const onChangeCanvasSize = jest.fn();
      render(
        <Buttons onChangeCanvasSize={onChangeCanvasSize}/>
      );

      const canvasElement = screen.getByTestId('buttons');
      expect(canvasElement).toBeInTheDocument();
  });
});
