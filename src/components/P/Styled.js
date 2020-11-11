import styled from "styled-components";

export const StyledP = styled.p`
  display: ${({ display }) => `${display || "block"}`};
  margin-top: ${({ top }) => (top ? `${top}px` : 0)};
  margin-right: ${({ right }) => (right ? `${right}px` : 0)};
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 0)};
  margin-left: ${({ left }) => (left ? `${left}px` : 0)};
  font-size: ${({ size }) => (size ? `${size}px` : "14px")};
`;
