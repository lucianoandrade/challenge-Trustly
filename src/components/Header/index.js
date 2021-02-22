import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderContainer, AvatarIcon } from './styles';

function Header() {
  const locationUrl = useLocation();
  const [pageTitle, setPageTitle] = useState();

  useEffect(() => {
    const location = locationUrl.pathname;
    const expr = location;

    switch (expr) {
      case '/':
        setPageTitle('Sneakers');
        break;
      case '/checkoutpage':
        setPageTitle('Checkout');
        break;
      case '/receiptpage':
        setPageTitle('Review and Confirmation');
        break;
      default:
        setPageTitle('');
    }
  }, [locationUrl.pathname]);

  return (
    <HeaderContainer>
      {pageTitle}
      <AvatarIcon/>
    </HeaderContainer>
  );
}

export default Header