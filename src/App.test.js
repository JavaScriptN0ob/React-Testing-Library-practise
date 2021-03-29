import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: `Change to ${replaceCamelWithSpaces('MidnightBlue')}` });

  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('button turns blue when clicked', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: `Change to ${replaceCamelWithSpaces('MidnightBlue')}` });

  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed'});

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(colorButton.textContent).toBe(`Change to ${replaceCamelWithSpaces('MediumVioletRed')}`);
});

test('initial conditions', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: `Change to ${replaceCamelWithSpaces('MidnightBlue')}` });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox disables button on first click and enables on second click', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: `Change to ${replaceCamelWithSpaces('MidnightBlue')}` });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('Disabled button has gray background and reverts to red', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: `Change to ${replaceCamelWithSpaces('MidnightBlue')}`})
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ 'background-color': 'gray'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ 'background-color': 'MediumVioletRed' });

  fireEvent.click(colorButton);
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ 'background-color': 'gray' });

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ 'background-color': 'MidnightBlue' });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', ()=> {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
