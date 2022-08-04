import { useEffect, useState } from 'react';

const TASK_STORAGE_KEY = 'todo-tasks';

const initialTasks = [
  { id: '1', value: 'Get hired!', isDone: false },
  { id: '2', value: 'Pass the technical assignment', isDone: false },
  { id: '3', value: 'Do the first interview', isDone: true },
];

function useHome() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const readTasksFromStorage = () => {
    let tasksFromStorage;
    const storageValue = localStorage.getItem(TASK_STORAGE_KEY);

    if (storageValue) {
      try {
        tasksFromStorage = JSON.parse(storageValue);
      } catch (error) {
        tasksFromStorage = initialTasks;
      }
    } else {
      tasksFromStorage = initialTasks;
    }

    setTasks(tasksFromStorage);
    setIsLoading(false);
  };

  useEffect(() => {
    readTasksFromStorage();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleTaskFormSubmit = (newTask) => {
    setTasks((currentState) => [newTask, ...currentState]);
  };

  const handleTaskRemove = (taskId) => {
    if (!taskId) {
      return;
    }

    setTasks((currentState) => currentState.filter(({ id }) => id !== taskId));
  };

  const handleTaskDone = (taskId) => {
    if (!taskId) {
      return;
    }

    const editedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone: !task.isDone };
      }

      return task;
    });

    setTasks(editedTasks);
  };

  return {
    tasks,
    handleTaskFormSubmit,
    handleTaskRemove,
    handleTaskDone,
    isLoading,
  };
}

export { useHome };
