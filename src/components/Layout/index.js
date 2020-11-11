import React from "react";

import { StyledLayout, StyledContent } from "./Styled";

const Layout = ({ children }) => {
  return (
    <>
      <StyledLayout>
        <StyledContent>{children}</StyledContent>
      </StyledLayout>
    </>
  );
};

export default Layout;
