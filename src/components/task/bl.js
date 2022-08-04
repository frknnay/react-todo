import { useEffect, useRef, useState } from 'react';

function useTask({ value, onEdit, id, isBeingEdited }) {
  const [tempValue, setTempValue] = useState(value);

  const inputRef = useRef();

  const handleInputChange = (e) => {
    setTempValue(e.target.value);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    onEdit({ id, value: tempValue });
  };

  useEffect(() => {
    if (isBeingEdited && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isBeingEdited]);

  return { tempValue, handleInputChange, handleEditFormSubmit, inputRef };
}

export { useTask };
