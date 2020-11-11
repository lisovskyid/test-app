import React from "react";
import { Button as AntdButton } from "antd";

const Button = ({ children, onClick }) => (
  <AntdButton onClick={onClick}>{children}</AntdButton>
);

export default Button;
