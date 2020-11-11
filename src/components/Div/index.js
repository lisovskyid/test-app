import React from "react";

import { StyledDiv } from "./Styled";

const Div = ({ direction, width, bottom, children, left, top, justify }) => (
  <StyledDiv
    direction={direction}
    width={width}
    bottom={bottom}
    left={left}
    top={top}
    justify={justify}
  >
    {children}
  </StyledDiv>
);

export default Div;
