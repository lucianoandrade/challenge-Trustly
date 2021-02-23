import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import PaymentMethods from '../PaymentMethods';
import Button from '../../components/Buttons/MainButton';
import DeleteIcon from '../../assets/images/deleteIcon.svg';
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

  const history = useHistory();
  const [chosenPaymentMethod, setChosenPaymentMethod] = useState('onlineBanks');
  
  const deleteProduct = () => {
    history.push('/');
  };

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

          <Delete onClick={deleteProduct}>
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

        <PaymentMethods handlePaymentMethod={handlePaymentMethod} />

        <Button onClick={goToSelectBankPage}>
          Continue
        </Button>
      </CheckoutWrapper>
  );
};

export default CheckoutMobile;