import React from 'react';
import PaymentMethods from '../PaymentMethods';
import Button from '../../components/Buttons/MainButton';
import DeleteIcon from '../../assets/deleteIcon.svg';
import {
  CheckoutWrapper,
  CheckoutTittle,
  ProductCard,
  Photo,
  Total,
  Delete,
  Amount,
  Description,
  Delivery,
} from './styles';

function CheckoutMobile(props) {
  const { product } = props
  return (
      <CheckoutWrapper>
        <CheckoutTittle>Checkout</CheckoutTittle>
        <ProductCard>
          <Photo>
            <img src={product.MaxresURL} alt={`Product`} />
          </Photo>

          <Total>
            <p>Total cost</p>
            <p>Delivery included</p>
          </Total>

          <Delete>
            <img
              src={DeleteIcon}
              alt="Delete buttom"
            />
          </Delete>

          <Amount>
            <p>${Math.floor(product.price)}</p>
          </Amount>

          <Description>
            <p>{product.description}</p>
            <p>
              x 1, {product.color}, Size {product.size}
            </p>
            <p>Item #{product.id}</p>
          </Description>

          <Delivery>
            <p>Delivery details</p>
            <p>Luciano Andrade</p>
            <p>Phone no:+5521974960917</p>
            <p>Adress: Rio de Janeior, 21250-450</p>
          </Delivery>
        </ProductCard>

        <PaymentMethods />

        <Button 
          // onClick={goToSelectBankPage}
        >
            Continue
        </Button>
      </CheckoutWrapper>
  );
};

export default CheckoutMobile;