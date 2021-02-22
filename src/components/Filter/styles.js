import styled from 'styled-components';
import {ReactComponent as search} from '../../assets/searchIcon.svg';

export const Filter = styled.div`
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  width: 100%;
  margin: 0 auto;
  font-size:24px;
  color:${({ theme }) => theme.palette.lightGray};
  padding-bottom: 6px;
  margin-bottom: 12px;
`;

export const SearchIcon = styled(search)`
`;