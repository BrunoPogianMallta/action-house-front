import { useState } from 'react';

const useMessage = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  return { message, setMessage, error, setError };
};

export default useMessage;
