import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TaskList } from '.';

const mockTasks = [
  { id: 1, value: 'Do the groceries', isDone: false },
  { id: 2, value: 'Drink water', isDone: true },
];

describe('Task Component', () => {
  it('renders the component', () => {
    const taskComponent = render(
      <TaskList
        tasks={mockTasks}
        onTaskDone={() => {}}
        onTaskRemove={() => {}}
        onTaskEdit={() => {}}
      />
    );
    expect(taskComponent).not.toBeUndefined();
  });

  it('tasks are presented correctly', () => {
    render(
      <TaskList
        onTaskDone={() => {}}
        onTaskRemove={() => {}}
        onTaskEdit={() => {}}
        tasks={mockTasks}
      />
    );

    expect(screen.getByTestId('task-1')).not.toBeUndefined();
    expect(screen.getByTestId('task-2')).not.toBeUndefined();
  });

  it('callbacks are returning the correct data', () => {
    const handleTaskDone = jest.fn();
    const handleTaskRemove = jest.fn();

    render(
      <TaskList
        onTaskDone={handleTaskDone}
        onTaskRemove={handleTaskRemove}
        onTaskEdit={() => {}}
        tasks={mockTasks}
      />
    );

    fireEvent.click(screen.getByTestId('task-1-toggle-button'));
    expect(handleTaskDone).toBeCalledWith(1);

    fireEvent.click(screen.getByTestId('task-2-remove-button'));
    expect(handleTaskRemove).toBeCalledWith(2);
  });
});
