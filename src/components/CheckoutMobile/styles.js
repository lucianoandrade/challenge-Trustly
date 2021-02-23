import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
  display: none;
  flex-direction: column;
  flex-grow: 1;
  padding: 0.55rem;
  margin-bottom: 1rem;

  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  @media screen and (max-width: 599px){
    display: flex;
  }
`;

export const CheckoutTittle = styled.p`
  font-size: 23px;
  line-height: 33px;
  margin-bottom: 0.55rem;
`;

export const ProductCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.7fr 0.3fr;
  grid-template-rows: 1fr 1fr 0.3fr;
  gap: 0px 0px;
  grid-template-areas:
    'photo description delete'
    'photo delivery delete'
    'total amount delete';

  background-color: ${({ theme }) => theme.palette.box};
  border-radius: 9px;
  padding: 0.85rem;
`;

export const Photo = styled.div`
  grid-area: photo;
  width: 24vw;
  height: 26vw;
  border-radius: 9px;
  margin-right: 0.55rem;
  position: relative;
  overflow: hidden;

  :-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  img {
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;
    width: 50vw;
  }
`;

export const Total = styled.div`
  grid-area: total;
  height: auto;
  padding-top: 0.5rem;

  p {
    &:first-child {
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
    }
    &:not(:first-child) {
      font-family: Arial;
      font-size: 13px;
      line-height: 16px;
      color: ${({ theme }) => theme.palette.box};
    }
  }
`;

export const Delete = styled.div`
  grid-area: delete;
  img {
    float: right;
    cursor: pointer;
  }
`;

export const Amount = styled.div`
  grid-area: amount;
  height: auto;
  padding-top: 0.5rem;

  p {
    float: right;
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
  }
`;

export const Description = styled.div`
  grid-area: description;

  p {
    &:first-child {
      font-size: 18px;
      line-height: 16px;
    }
    &:not(:first-child) {
      font-family: Arial;
      font-size: 14px;
      line-height: 21px;

      color: ${({ theme }) => theme.palette.box};
    }
  }
`;

export const Delivery = styled.div`
  grid-area: delivery;

  font-family: Arial;
  font-size: 13px;
  line-height: 136%;

  letter-spacing: 0.5px;

  p {
    &:first-child {
      color: ${({ theme }) => theme.palette.otherBlack};
    }
    &:not(:first-child) {
      font-size: 12px;
      font-weight: 400;

      color: ${({ theme }) => theme.palette.otherGray};
    }
  }
`;

export const PaymentMethodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.85rem 0;
  background-color: ${({ theme }) => theme.palette.box};
  border-radius: 9px;
  padding: 0.85rem;
`;

export const PaymentMethodTittle = styled.p`
  margin-top: 1rem;
  font-size: 16px;
  line-height: 23px;
`;

export const PaymentMethodItem = styled.button`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-content: center;
  text-align: left;
  height: 4.5rem;

  border: none;
  outline: none;
  border: 2px solid transparent;
  border-radius: 9px;
  margin-bottom: 1rem;
  padding: 0.6rem 0.4rem;
  background: ${({ theme }) => theme.palette.white};
  cursor: pointer;

  &:active {
    border:  ${props => `2px solid ${props.theme.palette.destaq}`};
    border-radius: 9px;
  }
  &:hover {
    border: ${props => `2px solid ${props.theme.palette.destaq}`};
    border-radius: 9px;
  }
  &:focus {
    border: ${props => `2px solid ${props.theme.palette.destaq}`};
    border-radius: 9px;
  }

  img {
    float: right;
  }

  p {
    &:first-child {
      font-size: 13px;
      line-height: 18px;

      color: ${({ theme }) => theme.palette.oneMoreGray};
    }
  }
`;

export const DiscountAdd = styled.p`
  font-weight: bold;
  font-size: 9px;
  line-height: 10px;
  text-align: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.discount};
  padding: 3px 6px;
  display: inline-block;

  color: ${({ theme }) => theme.palette.discountAdd};
`;

export const OnlineBanksBanner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
