import styled from 'styled-components';
import {ReactComponent as search} from '../../assets/searchIcon.svg';

export const Filter = styled.div`
  display: flex;
  border-bottom: ${props => `1px solid ${props.theme.palette.alternativeGray}`};
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  font-size:24px;
  color:${({ theme }) => theme.palette.lightGray};
  padding-bottom: 6px;
  margin-bottom: 40px;
`;

export const SearchIcon = styled(search)`
  width:22px;
  height: 22px;
`;