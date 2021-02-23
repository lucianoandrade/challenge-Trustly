import React from 'react';
import {ImageProduct} from './styles';

function DestaqImage(props) {
  const { children } = props; 
  return (
      <ImageProduct>
        {children}
      </ImageProduct>
  );
}
export default DestaqImage;