import styled from "styled-components";

export const StyledDiv = styled.div`
  display: ${({ display }) => `${display || "flex"}`};
  flex-direction: ${({ direction }) => `${direction || "row"}`};
  width: ${({ width }) => width};
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 0)};
  margin-top: ${({ top }) => (top ? `${top}px` : 0)};
  margin-left: ${({ left }) => (left ? `${left}px` : 0)};
  justify-content: ${({ justify }) => (justify ? justify : "flex-start")};
`;
