import { useState } from 'react';

export default function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ fieldName, message }) {
    const errorAlreadyExists = errors.find(error => error.fieldName === fieldName);

      if (errorAlreadyExists) return;

      setErrors(prevState => [...prevState,
        { fieldName, message }

      ]);

  };

  function removeError({ fieldName }) {
    setErrors(prevState => prevState.filter(
      error => error.fieldName !== fieldName

    )); //remove do meu estado todos os objeto que tenham a propriedade 'field' igual a 'name'

  };

  function getErrorMessageByFieldName({ fieldName }) {
    return errors.find(error => error.fieldName === fieldName)?.message;

  };

  return { setError, removeError, getErrorMessageByFieldName };

};
