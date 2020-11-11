import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import Button from "../../../components/Button/";
import Div from "../../../components/Div/";
import Table from "../../../components/Table";
import Filter from "../../../components/Table/Filter";
import { getUrlPart } from "../../../common/helpers";

import { tableColumns, filterData } from "./settings";

const Reward = ({ rewards }) => {
  const [tableData, setTableData] = useState([]);
  const { location } = useHistory();
  const staticContent = useRef([]);
  const currentStatus = getUrlPart(location);

  useEffect(() => {
    const onMount = () => {
      if (currentStatus === "all") {
        staticContent.current = rewards;
        return setTableData(rewards);
      }

      const currentRewards = rewards.filter(
        ({ status }) => status === currentStatus
      );
      staticContent.current = currentRewards;
      setTableData(currentRewards);
    };

    onMount();
  }, [rewards]);

  const filterHandler = (value) => {
    const defaultData = staticContent.current;
    if (value.toLowerCase() === "none") return setTableData(defaultData);
    const filteredData = defaultData.filter(({ user }) => user.name === value);
    setTableData(filteredData);
  };

  const sortHandler = () => {
    const sortedData = tableData.sort((a, b) =>
      a.user.name < b.user.name ? -1 : 1
    );

    setTableData([...sortedData]);
  };

  const renderActions = (row) => (
    <Link to={`${location.pathname}/${row.id}`}>Edit</Link>
  );

  return (
    <Div>
      <Table
        columns={tableColumns}
        data={tableData}
        renderActions={renderActions}
      />
      <Div direction="column">
        <Filter
          label="Filter by User name"
          settings={filterData}
          onChange={filterHandler}
        />
        <Button onClick={sortHandler}>Sort by Name</Button>
      </Div>
    </Div>
  );
};

const mapStateToProps = ({ rewards }) => ({
  rewards: rewards.list,
});

export default connect(mapStateToProps)(Reward);
