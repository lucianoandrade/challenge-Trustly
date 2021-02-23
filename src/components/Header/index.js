import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from '../Buttons/BackButton';
import { HeaderContainer, AvatarIcon } from './styles';

function Header() {
  const locationUrl = useLocation();
  const [pageTitle, setPageTitle] = useState();

  useEffect(() => {
    const location = locationUrl.pathname;

    switch (location) {
      case '/':
        setPageTitle('Sneakers');
        break;
      case '/checkout':
        setPageTitle('Checkout');
        break;
      case '/receipt':
        setPageTitle('Review and Confirmation');
        break;
      default:
        setPageTitle('');
    }
  }, [locationUrl.pathname]);

  return (
    <HeaderContainer>
      <BackButton/>
      {pageTitle}
      <AvatarIcon/>
    </HeaderContainer>
  );
}

export default Header