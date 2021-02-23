import styled from 'styled-components';

export const PaymentMethodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  border-radius: 9px;
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
  border-radius: 9.02222px;
  margin-bottom: 1rem;
  padding: 0.6rem 0.4rem;
  background: #ffffff;
  cursor: pointer;

  &:active {
    border: 2px solid #63b55c;
    border-radius: 9.02222px;
  }
  &:hover {
    border: 2px solid #63b55c;
    border-radius: 9.02222px;
  }
  &:focus {
    border: 2px solid #63b55c;
    border-radius: 9.02222px;
  }

  img {
    float: right;
  }

  p {
    &:first-child {
      font-style: normal;
      font-weight: normal;
      font-size: 13.5333px;
      line-height: 18px;

      color: #565656;
    }
  }
`;

export const DiscountAdd = styled.p`
  font-weight: bold;
  font-size: 9.77px;
  line-height: 10px;
  text-align: center;
  border-radius: 5px;
  background-color: #ffcc00;
  padding: 3px 6px;
  display: inline-block;
  color: #9e7d27;
`;

export const OnlineBanksBanner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;