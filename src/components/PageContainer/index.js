import React from "react";
import Header from '../Header';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import GlobalStyles from '../../styles/global';
import {Container} from './styles';

const PageContainer = props => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header/>
          <Container>
            {props.children}
          </Container>
      </ThemeProvider>
    </>
  )
}
export default PageContainer;