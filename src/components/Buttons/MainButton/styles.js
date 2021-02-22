import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.mainButton};
  color:  ${({ theme }) => theme.palette.white};
  padding: 0.6rem 0;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
`;
