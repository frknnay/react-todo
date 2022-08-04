import React from 'react';
import { TaskInput } from '../../components/task-input-form';
import { TaskList } from '../../components/task-list';
import { useHome } from './bl';
import styles from './style.module.scss';

function HomePage() {
  const {
    tasks,
    handleTaskDone,
    handleTaskFormSubmit,
    handleTaskRemove,
    handleTaskEdit,
    isLoading,
  } = useHome();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.homePage}>
      <div className={styles.todoContainer}>
        <h1>TO-DO List</h1>
        <TaskInput onSubmit={handleTaskFormSubmit} />
        <div className={styles.seperator} />
        <TaskList
          tasks={tasks}
          onTaskRemove={handleTaskRemove}
          onTaskDone={handleTaskDone}
          onTaskEdit={handleTaskEdit}
        />
      </div>
    </div>
  );
}

export { HomePage };
