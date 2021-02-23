import React from 'react';
import Button from '../Buttons/MainButton';
import ImageProduct from '../DestaqImage';
import PaymentBox from '../PaymentBox';
import BanckIcon from '../../assets/icons/bankIcon.svg';
import {
  Container,
  InfosProduct,
  InfoLeft,
  ColumnTitle,
  DescriptionPrduct,
  InfoRight,
  OnliBanking,
  DescriptionTotal,
  TotalCost,
  Total,
  Next,
  Banck
} from './styles';

function ReceiptDesktop(props) {
  const { product } = props;
  return (
    <Container>
      <ImageProduct>
        <img src={product.MaxresURL} alt="Product" />
      </ImageProduct>
      <PaymentBox>
        <InfosProduct>
          <InfoLeft>
            <ColumnTitle>Order summary</ColumnTitle>
            <DescriptionPrduct>
              <p>{product.description}</p>
              <p>
                x 1, {product.color}, Size {product.size}
              </p>
              <p>Item #{product.id}</p>
            </DescriptionPrduct>
            <DescriptionTotal>
              <TotalCost>
                <p>Total cost</p>
                <p>Delivery included</p>
              </TotalCost>
              <Total>{`$${Math.floor(product.price)}`}</Total>
            </DescriptionTotal>
          </InfoLeft>
          <InfoRight>
            <ColumnTitle>Payment Method</ColumnTitle>
            <OnliBanking>
              <Banck>
                <img src={BanckIcon} alt="Icon Banck"/>
              </Banck>
              <p>Online Banking</p>
            </OnliBanking>
            <Next>
              <Button>Place order</Button>
            </Next>
          </InfoRight>
        </InfosProduct>
      </PaymentBox>
    </Container>
  );
};

export default ReceiptDesktop;