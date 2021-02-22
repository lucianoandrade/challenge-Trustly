import React from "react";
import { Button } from "./styles.js";

const ButtonComponet = props => {
  const {children, background="default"} = props;

  return (
    <>
      <Button
        background={background}
        onClick={props.onClick}>
          {children}
      </Button>
    </>
  );
};

export default ButtonComponet;