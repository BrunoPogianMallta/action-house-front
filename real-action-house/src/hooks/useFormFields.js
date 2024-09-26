import { useState } from 'react';

const useFormFields = (initialValues) => {
  const [fields, setFields] = useState(initialValues);

  const handleFieldChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  return [fields, handleFieldChange];
};

export default useFormFields;
