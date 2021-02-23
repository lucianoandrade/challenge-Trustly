import React, { useContext } from 'react';
import { GlobalContext } from '../../components/GlobalContext';
import PageContainer from "../../components/PageContainer";
import LineStage from "../../components/Stages";
import CheckoutDesktop from "../../components/CheckoutDesktop";
import CheckoutMobile from "../../components/CheckoutMobile";

function CheckoutPage() {
  const allContext = useContext(GlobalContext);
  const product = allContext.chosenProduct;

  return (
    <PageContainer>
      <LineStage />
      <CheckoutDesktop product={product}/>
      <CheckoutMobile product={product} />
    </PageContainer>
  );
};

export default CheckoutPage;