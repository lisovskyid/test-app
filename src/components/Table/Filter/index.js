import React from "react";
import { Select } from "antd";

import P from "../../P";
import { Wrapper, StyledSelect } from "./Styled";

const { Option } = Select;

const Filter = ({ label, settings, onChange }) => (
  <Wrapper>
    <P size={18}>{label}</P>
    <StyledSelect onChange={onChange}>
      <Option key="none">None</Option>
      {settings.map((text) => (
        <Option key={text}>{text}</Option>
      ))}
    </StyledSelect>
  </Wrapper>
);

export default Filter;
