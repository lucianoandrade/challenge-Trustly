import styled from 'styled-components';
import {ReactComponent as arrowLeft} from '../../../assets/images/arrowLeft.svg';

export const BackButtonContainer = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 17px;
  cursor: pointer;
  position: absolute;
  left: 0;
  margin-left: 5%;
`;

export const ArrowLeftIcon = styled(arrowLeft)`
  height: 17px;
  width: 17px;
  margin-right:8px;
`;

export const TitleButton = styled.p`
  font-family: Arial;
  font-size: 21px;
  line-height: 25px;
  color: ${({ theme }) => theme.palette.black};
`;