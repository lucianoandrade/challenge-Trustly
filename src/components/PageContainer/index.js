import React from "react";
import Header from '../Header';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import GlobalStyles from '../../styles/global';

const PageContainer = props => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header/>
          {props.children}
      </ThemeProvider>
    </>
  )
}
export default PageContainer;