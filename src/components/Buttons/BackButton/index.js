import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { BackButtonContainer, ArrowLeftIcon, TitleButton } from './styles';

function BackButton() {
  const history = useHistory();
  const locationUrl = useLocation();
  const location = locationUrl.pathname;

  const handleBackButton = () => {
    if (location !== '/receipt') {
      history.goBack();
    } else {
      history.push('/');
    }
  };

  const showBackButton =
    location === '/checkout' ||
    location === '/receipt' ? (
      <BackButtonContainer onClick={handleBackButton}>
        <ArrowLeftIcon/>
        <TitleButton>Back</TitleButton>
      </BackButtonContainer>
    ) : (
      <div></div>
    );

  return <div>{showBackButton}</div>;
}

export default BackButton;