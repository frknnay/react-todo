import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Task } from '.';

describe('Task Component', () => {
  it('renders the component', () => {
    const taskComponent = render(
      <Task
        onDoneClick={() => {}}
        onRemoveClick={() => {}}
        onEdit={() => {}}
        onEditClick={() => {}}
        value="Test task"
        isDone
        id={3}
      />
    );
    expect(taskComponent).not.toBeUndefined();
  });

  it('value is presented correctly', () => {
    render(
      <Task
        onDoneClick={() => {}}
        onRemoveClick={() => {}}
        onEditClick={() => {}}
        onEdit={() => {}}
        value="Test task"
        isDone
        id={3}
      />
    );

    expect(screen.getByTestId('task-3-value').innerHTML).toEqual('Test task');
  });

  it('callbacks are returning the correct data', () => {
    const handleDoneClick = jest.fn();
    const handleRemoveClick = jest.fn();

    render(
      <Task
        onDoneClick={handleDoneClick}
        onRemoveClick={handleRemoveClick}
        onEditClick={() => {}}
        onEdit={() => {}}
        value="Test task"
        isDone
        id={3}
      />
    );

    fireEvent.click(screen.getByTestId('task-3-toggle-button'));
    expect(handleDoneClick).toBeCalledWith(3);

    fireEvent.click(screen.getByTestId('task-3-remove-button'));
    expect(handleDoneClick).toBeCalledWith(3);
  });
});
