import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

function TaskInput({ onSubmit }) {
  const [taskValue, setTaskValue] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (taskValue && onSubmit) {
      const newTask = {
        id: Date.now(),
        value: taskValue,
        isDone: false,
      };

      onSubmit(newTask);
      setTaskValue('');
    }
  };

  const handleInputChange = (event) => {
    setTaskValue(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.inputForm}>
      <input
        type="text"
        placeholder="Enter your task!"
        value={taskValue}
        onChange={handleInputChange}
        data-testid="new-task-input"
      />
    </form>
  );
}

TaskInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { TaskInput };
