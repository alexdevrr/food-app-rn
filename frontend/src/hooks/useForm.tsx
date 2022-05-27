import {useState} from 'react';

export const useForm = <T extends Object>(formulario: T) => {
  const [state, setState] = useState(formulario);

  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return {
    ...state,
    statecurrent: state,
    onChange,
  };
};
