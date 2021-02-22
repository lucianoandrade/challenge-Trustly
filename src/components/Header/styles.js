import styled from 'styled-components';
import {ReactComponent as userAvatar} from '../../assets/userAvatar.svg';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  background-color:${({ theme }) => theme.palette.header};
  color:${({ theme }) => theme.palette.black};
  font-size: 26px;
  text-align: center;
  line-height: 30px;
  padding: 26px 0;
  margin-bottom: 60px;

  @media screen and (max-width: 600px){
    background-color:${({ theme }) => theme.palette.white};
    font-size: 0;
    margin-bottom: 20px;
  }
`;

export const AvatarIcon = styled(userAvatar)`
  position: absolute;
  right: 0;
  margin-right: 10%;
`;