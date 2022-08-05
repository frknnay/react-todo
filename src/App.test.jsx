import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

  it('can add todo', () => {
    render(<App />);

    const taskInput = screen.getByTestId('new-task-input');
    fireEvent.change(taskInput, { target: { value: 'Water the plants' } });
    fireEvent.submit(taskInput);

    expect(screen.getByText('Water the plants')).toBeDefined();
  });

  it('can delete todo', () => {
    render(<App />);

    const taskInput = screen.getByTestId('new-task-input');
    fireEvent.change(taskInput, { target: { value: 'Water the plants' } });
    fireEvent.submit(taskInput);

    // to-do: find a way to test deleting todos
  });
});
