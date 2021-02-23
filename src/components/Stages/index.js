import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  LineStage, 
  Steps, 
  Step, 
  PhaseCart,
  PhasePayment,
  PhaseReceipt, 
  PhaseTitle
} from './styles';

function StageComponent() {
  const locationUrl = useLocation(); 
  const location = locationUrl.pathname;
  return (
    <>
      <LineStage />
      <Steps>
        <Step>
          <PhaseCart location={location}/>
          <PhaseTitle>Cart</PhaseTitle>
        </Step>
        <Step>
          <PhasePayment location={location}/>
          <PhaseTitle>Payment options</PhaseTitle>
        </Step>
        <Step>
          <PhaseReceipt location={location}/>
          <PhaseTitle>Receipt</PhaseTitle>
        </Step>
      </Steps>
    </>
  );
}
export default StageComponent;