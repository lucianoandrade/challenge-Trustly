import React, { useContext } from 'react';
import { GlobalContext } from '../../components/GlobalContext';
import PageContainer from "../../components/PageContainer";
import LineStage from "../../components/Stages";
import ReceiptDesktop from "../../components/ReceiptDesktop";
import ReceiptMobile from "../../components/ReceiptMobile";

function ReceiptPage() {
  const allContext = useContext(GlobalContext);
  const product = allContext.chosenProduct;
  return (
    <PageContainer>
      <LineStage />
      <ReceiptDesktop product={product}/>
      <ReceiptMobile product={product}/>
    </PageContainer>
  );
};

export default ReceiptPage;