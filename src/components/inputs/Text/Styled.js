import styled from "styled-components";
import { Input } from "antd";

export const StyledInput = styled(Input)`
  width: 100% !important;
  height: 44px !important;
  color: #1a2d47 !important;
  border-radius: 15px !important;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .ant-input[disabled] {
    background-color: transparent !important;
    border-color: transparent !important;
    color: #1a2d47 !important;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
