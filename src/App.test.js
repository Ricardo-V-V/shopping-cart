import { render, screen } from '@testing-library/react';
import Header from './components/Header';

describe('Prueba en el <Header />', () => {
  test('Debe de mostrar el valor inicial de 5 <Header count={5}/>', () => {
    const count = 5;
    render(<Header count={count} />);
    expect(screen.getByText(5)).toBeTruthy();
  });
});
