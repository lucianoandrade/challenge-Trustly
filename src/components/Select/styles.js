import styled from 'styled-components';

export const Select = styled.select`
    border:  ${props => `1px solid ${props.theme.palette.borderLineSelect}`};
    box-sizing: border-box;
    border-radius: 25px;
    padding: 5px 10px;
    color: ${({ theme }) => theme.palette.alternativeGray};
    background-color: ${({ theme }) => theme.palette.white};
    &:focus {
      outline: none;
    }
`;