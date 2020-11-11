import React from "react";
import { Select as AntSelect } from "antd";
import isEmpty from "lodash/isEmpty";

import { StyledSelect } from "./Styled";
import Div from "../../Div";
import P from "../../P";

const { Option } = AntSelect;

const Select = ({
  label = "",
  list = [],
  optionKey = "id",
  valueKey = "id",
  optionName = "name",
  dataName = "name",
  selectedValue = "",
  defaultValue = "",
  onChange = () => null,
}) => (
  <Div direction="column">
    {label && <P size={20}>{label}</P>}
    <Div display="block" width="100%">
      <StyledSelect
        optionFilterProp="children"
        value={isEmpty(selectedValue) ? defaultValue : selectedValue}
        onChange={onChange}
      >
        {list.map((o) => (
          <Option key={o[optionKey]} data-name={dataName} value={o[valueKey]}>
            {o[optionName]}
          </Option>
        ))}
      </StyledSelect>
    </Div>
  </Div>
);

export default Select;
