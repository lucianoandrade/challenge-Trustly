import React from 'react';
import {PaymentBox} from './styles';

function PaymentBoxComponent(props) {
  const { children } = props; 
  return (
    <PaymentBox>
        {children}
    </PaymentBox>
  );
}
export default PaymentBoxComponent;