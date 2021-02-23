import React from 'react';
import onlineBanks from '../../assets/images/onlineBanks.svg';
import cardPayment from '../../assets/images/cardPayment.svg';
import applePay from '../../assets/images/applePay.svg';

import {
  PaymentMethodWrapper,
  PaymentMethodItem,
  DiscountAdd,
  OnlineBanksBanner,
} from './styles';

function PaymentMethods(props) {
  return (
    <>
      <PaymentMethodWrapper>
        <PaymentMethodItem 
          autoFocus
          onClick={() => props.handlePaymentMethod('onlineBanks')}
        >
          <div>
            <p>Online banking</p>
            <DiscountAdd>SAVE 10%</DiscountAdd>
          </div>
          <OnlineBanksBanner>
            <img src={onlineBanks} alt="Online banks banner" />
          </OnlineBanksBanner>
        </PaymentMethodItem>

        <PaymentMethodItem
          onClick={() => props.handlePaymentMethod('cardPayment')}
        >
          <div>
            <p>Card payment</p>
          </div>
          <div>
            <img src={cardPayment} alt="Online banks banner" />
          </div>
        </PaymentMethodItem>

        <PaymentMethodItem
          onClick={() => props.handlePaymentMethod('applePay')}
        >
          <div>
            <p>Apple pay</p>
          </div>
          <div>
            <img src={applePay} alt="Online banks banner" />
          </div>
        </PaymentMethodItem>
      </PaymentMethodWrapper>
    </>
  );
}
export default PaymentMethods;