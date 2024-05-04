import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render app correctly', () => {
    const { container } = render(<App />);
    const app = container.getElementsByClassName('App');

    expect(app).toBeTruthy();
  });
});
