import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 47px;
  height: 570px;
  @media screen and (max-width: 600px){
    display: none;
  }
`;

export const ImageProduct = styled.section`
  margin-right: 38px;
  img {
    max-width: 532px;
    width: 100%;
    height: 570px;
    border-radius: 11px;
  }
  @media screen and (max-width: 769px){
    height: 620px;
  }
`;

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

export const InfosProduct = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.p`
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.palette.black}
`;

export const DescriptionPrduct = styled.div`
  p {
    &:first-child {
      font-size: 16px;
      line-height: 20px;
      color: ${({ theme }) => theme.palette.black}
    }
    &:not(:first-child) {
      font-size: 16px;
      line-height: 25px;
      color: ${({ theme }) => theme.palette.otherGray}
    }
  }
`;

export const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionDelivery = styled.div`
  p {
    font-size: 16px;
    line-height: 153.3%;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.palette.otherGray}}
  }
`;

export const DescriptionTotal = styled.div`
  display: flex;
`;

export const TotalCost =  styled.div`
  margin-top: 14px;
  p {
    &:first-child {
      font-size: 16px;
      line-height: 20px;
      color: ${({ theme }) => theme.palette.black}
    }
    &:not(:first-child) {
      font-size: 16px;
      line-height: 25px;
      color: ${({ theme }) => theme.palette.otherGray}
    }
  }
`;

export const Total = styled.span`
  font-size: 43px;
  line-height: 44px;
  margin: 15px 0 0 15px;
  color: ${({ theme }) => theme.palette.black}
`;

export const PaymentTitle = styled.p`
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.palette.black}
`;

export const Next = styled.div`
  width: 220px;
  margin-left: auto;
`;