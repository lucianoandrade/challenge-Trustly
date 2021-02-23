import styled from 'styled-components';

export const ImageProduct = styled.section`
  grid-area: photo;
  margin-right: 38px;
  max-width: 532px;
  width: 100%;
  height: 570px;
  border-radius: 11px;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: -9999px;
    bottom: -9999px;
    left: -9999px;
    right: -9999px;
    margin: auto;
    width: 50vw;
    height: 570px;
  }
  @media screen and (max-width: 769px){
    height: 620px;
  }
`;