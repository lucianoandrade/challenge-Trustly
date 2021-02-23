import styled from 'styled-components';

export const PaymentBox = styled.section`
  max-width: 731px;
  width: 100%;
  height: 570px;
  border-radius: 11px;
  background-color: ${({ theme }) => theme.palette.box};
  padding: 20px 28px;
  @media screen and (max-width: 769px){
    height: 620px;
  }
`;