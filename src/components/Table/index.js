import React from "react";

import { StyledTable } from "./Styled";

import { tableRowKey, actionsColumn } from "./settings";

const Table = ({ columns, data, renderActions, showHeader = true }) => {
  const renderColumns = () => {
    if (!renderActions) return columns;

    return [
      ...columns,
      {
        ...actionsColumn,
        render: (_, row) => renderActions(row),
      },
    ];
  };

  return (
    <StyledTable
      showHeader={showHeader}
      rowKey={tableRowKey}
      columns={renderColumns()}
      dataSource={data}
    />
  );
};

export default Table;
