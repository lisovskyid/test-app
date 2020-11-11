import styled from "styled-components";
import { Select } from "antd";

export const StyledSelect = styled(Select)`
  width: 100% !important;
  text-transform: capitalize !important;

  .ant-select-selection {
    height: 44px !important;
    color: #1a2d47 !important;
    border-radius: 15px !important;
  }

  .ant-select-selection__rendered {
    line-height: 44px !important;
  }
`;
