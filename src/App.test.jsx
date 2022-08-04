import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('TodoApp', () => {
  it('renders app', () => {
    const app = render(<App />);
    expect(app).not.toBeUndefined();
  });

  it('renders initial items', () => {
    render(<App />);

    expect(screen.getByText('Get hired!')).toBeDefined();
  });
});
