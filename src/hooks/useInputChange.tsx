import { useState } from 'react';

const useInputChange = (initialState: any) => {
  const [state, setState] = useState(initialState);

  const handleInputChange = (e: any) => {
    setState(e.target.value);
  };
  const reset = () => {
    setState(initialState);
  };

  return [state, handleInputChange, reset];
};

export { useInputChange };
