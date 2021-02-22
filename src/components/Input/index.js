import React from "react";
import { Input } from "./styles";

const InputComponet = props => {
  const {
    id,
    type,
    name,
    placeholder,
    onChange
  } = props;

  return (
    <Input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
    />
  );
};

export default InputComponet;