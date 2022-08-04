import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { ReactComponent as CircleIcon } from '../../assets/icons/circle.svg';
import { ReactComponent as CheckedCircleIcon } from '../../assets/icons/check-circle.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';
import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg';

import styles from './style.module.scss';
import { useTask } from './bl';

function Task({
  id,
  isDone,
  value,
  onRemoveClick,
  onDoneClick,
  onEditClick,
  onEdit,
  isBeingEdited,
}) {
  const { handleInputChange, handleEditFormSubmit, tempValue, inputRef } =
    useTask({
      id,
      value,
      onEdit,
      isBeingEdited,
    });

  return (
    <div
      className={cn(styles.task, {
        [styles.done]: isDone,
        [styles.editing]: isBeingEdited,
      })}
      data-testid={`task-${id}`}
    >
      <button
        type="button"
        className={cn(styles.button, styles.toggleButton)}
        onClick={() => onDoneClick(id)}
        data-testid={`task-${id}-toggle-button`}
      >
        {isDone ? <CheckedCircleIcon /> : <CircleIcon />}
      </button>
      <form onSubmit={handleEditFormSubmit}>
        <input
          type="text"
          className={styles.value}
          data-testid={`task-${id}-value`}
          value={isBeingEdited ? tempValue : value}
          disabled={!isBeingEdited}
          onChange={handleInputChange}
          ref={inputRef}
        />
      </form>
      <button
        className={cn(styles.button, styles.editButton)}
        onClick={() => {
          if (isBeingEdited) {
            onEdit({ id, value: tempValue });
          } else {
            onEditClick(id);
          }
        }}
        type="submit"
        data-testid={`task-${id}-edit-button`}
      >
        {isBeingEdited ? <CheckIcon /> : <EditIcon />}
      </button>
      <button
        className={styles.button}
        onClick={() => onRemoveClick(id)}
        type="submit"
        data-testid={`task-${id}-remove-button`}
      >
        <TrashIcon />
      </button>
    </div>
  );
}

Task.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isDone: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onDoneClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  isBeingEdited: PropTypes.bool,
};

Task.defaultProps = {
  isDone: false,
  isBeingEdited: false,
};

export { Task };
