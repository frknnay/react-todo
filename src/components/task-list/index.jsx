import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../task';

import styles from './style.module.scss';
import { useTaskList } from './bl';

function TaskList({ tasks, onTaskRemove, onTaskDone, onTaskEdit }) {
  const { editedTaskId, handleEditClick, handleTaskEdit } = useTaskList({
    onTaskEdit,
  });

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
            onEditClick={handleEditClick}
            onEdit={handleTaskEdit}
            isBeingEdited={editedTaskId === task.id}
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
  onTaskEdit: PropTypes.func.isRequired,
};

export { TaskList };
