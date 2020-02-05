import { useState } from 'react';

const useInput = initialState => {
  const [values, setValues] = useState(initialState);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return { handleChange, values };
};

export default useInput;
