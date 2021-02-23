import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
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
  const { product } = props;
  const history = useHistory();
  const [chosenPaymentMethod, setChosenPaymentMethod] = useState('onlineBanks');

  const createTransaction = {
    accessId: 'D61EC9BAF0BB369B9438',
    merchantId: '1004314986',
    metadata: { demo: 'enabled' },
    currency: 'USD',
    paymentType: 'Deferred',
    amount: `${product.price}`,
    description: `luciano.andrade1610@gmail.com`,
    merchantReference: '123456',
    returnUrl: '#success',
    cancelUrl: '#cancel'
  }

  const goToSelectBankPage = () => {
    if (chosenPaymentMethod === 'onlineBanks') {
      window.PayWithMyBank.establish(createTransaction);
      window.PayWithMyBank.addPanelListener(function(command, event) {
        if (command === 'event' && event.type === 'new_location') {
          if (event.data.indexOf('#success') === 0) {
            history.push('/receipt');
          } else {
            alert('Transaction canceled');
          }
          return false;
        }
      });
    } else {
      alert('Unsupported payment method, please use "Online banking"');
    }
  };

  const handlePaymentMethod = (paymentMethod) => {
    setChosenPaymentMethod(paymentMethod);
  };

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
        <PaymentMethods handlePaymentMethod={handlePaymentMethod} />
        <Next>
          <Button onClick={goToSelectBankPage}>Continue</Button>
        </Next>
      </PaymentBox>
    </Container>
  );
};

export default CheckoutDesktop;