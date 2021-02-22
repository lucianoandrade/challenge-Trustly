import React from 'react';
import Input from '../Input';
import {Filter, SearchIcon} from './styles';

function FilterComponent(props) {
  return (
    <Filter>
      <SearchIcon />
      <Input
        id="inputFilter"
        name="inputFilter"
        type="text"
        placeholder="Search for your sneaker"
      />
    </Filter>
  );
}
export default FilterComponent;