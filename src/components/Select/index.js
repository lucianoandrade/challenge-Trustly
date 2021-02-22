import React from 'react';
import {Select} from './styles';

function SelectComponent(props) {
  const {
    id,
    name,
    children,
    onChange
  } = props; 
  return (
      <Select name={name} id={id} onChange={onChange}>
        {children}
      </Select>
  );
}
export default SelectComponent;