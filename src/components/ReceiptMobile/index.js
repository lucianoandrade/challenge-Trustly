import React from 'react';
import Button from '../../components/Buttons/MainButton';
import bankIcon from '../../assets/icons/bankIcon.svg';
import {
  ReceiptPageContainer,
  ReceiptTittle,
  OrderSummaryCard,
  OrderSummaryTittle,
  Photo,
  Description,
  PaymentMethodCard,
  PaymentMethodTittle,
  PaymentMethodType,
  PaymentMethodTotal,
} from './styles';

function ReceiptMobile(props) {
  const { product } = props
  return (
    <ReceiptPageContainer>
      <ReceiptTittle>Review and confirmation</ReceiptTittle>

      <OrderSummaryCard>
        <OrderSummaryTittle>Order summary</OrderSummaryTittle>

        <Photo>
          <img src={product.MaxresURL} alt={`Product`} />
        </Photo>

        <Description>
          <p>{product.description}</p>
          <p>
            x 1, {product.color}, Size {product.size}
          </p>
          <p>Item #{product.id}</p>
        </Description>
      </OrderSummaryCard>

      <PaymentMethodCard>
        <PaymentMethodTittle>Payment Method</PaymentMethodTittle>

        <PaymentMethodType>
          <img src={bankIcon} alt="Online bank icon" />
          <p>Online Banking</p>
        </PaymentMethodType>

        <PaymentMethodTotal>
          <div>
            <p>Total cost</p>
            <p>Delivery included</p>
          </div>

          <div>
            <p>${Math.floor(product.price)}</p>
          </div>
        </PaymentMethodTotal>
      </PaymentMethodCard>

      <Button>Place order</Button>
    </ReceiptPageContainer>
  );
};

export default ReceiptMobile;