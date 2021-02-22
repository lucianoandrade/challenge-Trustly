import React from 'react';
import {
  LineStage, 
  Steps, 
  Step, 
  Phase, 
  PhaseTitle,
} from './styles';

function StageComponent() { 
  return (
    <>
        <LineStage />
        <Steps>
          <Step>
            <Phase/>
            <PhaseTitle>Cart</PhaseTitle>
          </Step>
          <Step id="center">
            <Phase/>
            <PhaseTitle>Payment options</PhaseTitle>
          </Step>
          <Step>
            <Phase/>
            <PhaseTitle>Receipt</PhaseTitle>
          </Step>
        </Steps>
    </>
  );
}
export default StageComponent;