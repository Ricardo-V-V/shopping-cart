import { render, screen } from '@testing-library/react';
import Header from './components/Header';

describe('Prueba en el <Header />', () => {
  test('Debe de mostrar el valor inicial de 5 <Header count={5}/>', () => {
    render(<Header count={10} />);
    expect(screen.getByText(5)).toBeTruthy();
  });
});
