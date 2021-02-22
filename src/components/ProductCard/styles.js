import styled from 'styled-components';

export const ProductsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  @media (max-width: 1024px) {
    overflow-y: auto;
    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.05);
  max-width: 297px;
  margin: 0 auto 40px;
  padding: 10px;
`;

export const ProductDescription = styled.div`
  margin: 20px 0;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
`;

export const ProductPrice = styled.div`
  font-weight: 600;
  font-size: 21px;
  line-height: 18px;
  text-align: center;
  color:${({ theme }) => theme.palette.black};
  margin-bottom: 10px;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.palette.alternativeGray};
`;

export const SelectName = styled.p`
  font-size: 12px;
  line-height: 18px;
`;