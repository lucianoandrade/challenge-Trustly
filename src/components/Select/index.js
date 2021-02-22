import React from 'react';
import {Select} from './styles';

function SelectComponent(props) {
  const {
    id,
    name,
    children
  } = props; 
  return (
      <Select name={name} id={id}>
        {children}
      </Select>
  );
}
export default SelectComponent;