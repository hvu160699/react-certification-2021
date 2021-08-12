import { useState } from 'react';

const useForm = (inititalValues) => {
  const [values, setValues] = useState(inititalValues);

  return [
    values,
    (e) =>
      setValues((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      })),
  ];
};

export default useForm;
