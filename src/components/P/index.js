import React from "react";

import { StyledP } from "./Styled";

const P = ({ display, top, right, bottom, left, size, children }) => (
  <StyledP
    display={display}
    top={top}
    right={right}
    bottom={bottom}
    left={left}
    size={size}
  >
    {children}
  </StyledP>
);

export default P;
