import React from "react";

import { StyledInput } from "./Styled";
import Div from "../../Div";
import P from "../../P";

const Text = ({
  label = "",
  value = "",
  name = "",
  disabled,
  onChange = () => null,
}) => {
  return (
    <Div direction="column" width="100%">
      {label && <P size={20}>{label}</P>}
      <StyledInput
        value={value}
        name={name}
        disabled={disabled}
        onChange={onChange}
      />
    </Div>
  );
};

export default Text;
