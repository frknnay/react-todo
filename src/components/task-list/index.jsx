import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../task';

import styles from './style.module.scss';

function TaskList({ tasks, onTaskRemove, onTaskDone }) {
  return (
    <div className={styles.taskList}>
      {tasks &&
        tasks.map((task) => (
          <Task
            id={task.id}
            value={task.value}
            isDone={task.isDone}
            key={task.id}
            onRemoveClick={onTaskRemove}
            onDoneClick={onTaskDone}
          />
        ))}
    </div>
  );
}

TaskList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTaskRemove: PropTypes.func.isRequired,
  onTaskDone: PropTypes.func.isRequired,
};

export { TaskList };
