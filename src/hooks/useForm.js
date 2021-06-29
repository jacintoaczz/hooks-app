import { useState } from "react";

export const useForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  return [values, handleInputChange];
};
