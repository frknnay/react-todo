import { useState } from 'react';

function useTaskList({ onTaskEdit }) {
  const [editedTaskId, setEditedTaskId] = useState(null);

  const handleEditClick = (id) => {
    setEditedTaskId(id);
  };

  const handleTaskEdit = (data) => {
    if (onTaskEdit) {
      onTaskEdit(data);
    }

    setEditedTaskId(null);
  };

  return {
    editedTaskId,
    handleEditClick,
    handleTaskEdit,
  };
}

export { useTaskList };
