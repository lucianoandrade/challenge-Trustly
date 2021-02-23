import React from 'react';
import PaymentMethods from '../PaymentMethods';
import Button from '../Buttons/MainButton';
import {
  Container, 
  ImageProduct, 
  PaymentBox,
  InfosProduct,
  InfoLeft,
  ColumnTitle,
  DescriptionPrduct,
  InfoRight,
  DescriptionDelivery,
  DescriptionTotal,
  TotalCost,
  Total,
  PaymentTitle,
  Next
} from './styles';

function CheckoutDesktop(props) {
  const { product } = props
  return (
    <Container>
      <ImageProduct>
        <img src={product.MaxresURL} alt="Product" />
      </ImageProduct>
      <PaymentBox>
        <InfosProduct>
          <InfoLeft>
            <ColumnTitle>Cart total</ColumnTitle>
            <DescriptionPrduct>
              <p>{product.description}</p>
              <p>
                x 1, {product.color}, Size {product.size}
              </p>
              <p>Item #{product.id}</p>
            </DescriptionPrduct>
          </InfoLeft>
          <InfoRight>
            <ColumnTitle>Delivery details</ColumnTitle>
            <DescriptionDelivery>
              <p>Luciano Andrade</p>
              <p>Phone no: +5521974960917</p>
              <p>Adress: Rio de Janeiro, 21250-450</p>
            </DescriptionDelivery>
            <DescriptionTotal>
              <TotalCost>
                <p>Total cost</p>
                <p>Delivery included</p>
              </TotalCost>
              <Total>{`$${Math.floor(product.price)}`}</Total>
            </DescriptionTotal>
          </InfoRight>
        </InfosProduct>
        <PaymentTitle>
          Select your payment method
        </PaymentTitle>
        <PaymentMethods/>
        <Next>
          <Button>Continue</Button>
        </Next>
      </PaymentBox>
    </Container>
  );
};

export default CheckoutDesktop;