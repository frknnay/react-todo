import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { ReactComponent as CircleIcon } from '../../assets/icons/circle.svg';
import { ReactComponent as CheckedCircleIcon } from '../../assets/icons/check-circle.svg';

import styles from './style.module.scss';

function Task({ id, isDone, value, onRemoveClick, onDoneClick }) {
  return (
    <div
      className={cn(styles.task, {
        [styles.done]: isDone,
      })}
    >
      <button
        type="button"
        className={styles.button}
        onClick={() => onDoneClick(id)}
      >
        {isDone ? <CheckedCircleIcon /> : <CircleIcon />}
      </button>
      <div className={styles.value}>{value}</div>
      <button
        className={styles.button}
        onClick={() => onRemoveClick(id)}
        type="submit"
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
};

Task.defaultProps = {
  isDone: false,
};

export { Task };
