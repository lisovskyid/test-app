import React, { useEffect } from "react";
import { connect } from "react-redux";

import { setRewards } from "../../actions/rewards";
import { setUsers } from "./../../actions/users";
import Layout from "../../components/Layout/";
import Div from "../../components/Div";
import Sidebar from "../../components/Sidebar/";
import Reward from "./Reward/";
import { ls } from "../../services";

import { sidebarMenu } from "./settings";

const Rewards = ({ setRewards, setUsers }) => {
  useEffect(() => {
    const onMount = () => {
      //replace mock to real data using httpService
      //move side effects to saga or thunk
      getRewards();
      getUsers();
    };

    onMount();
  }, []);

  const getUsers = () => {
    const response = ls.get("users");
    setUsers(response);
  };

  const getRewards = () => {
    const response = ls.get("rewards");
    const data = combineData(response);
    setRewards(data);
  };

  const combineData = (data) => {
    const uniqStatuses = getUniqStatuses(data);
    return { list: data, uniqStatuses };
  };

  const getUniqStatuses = (data) =>
    data.reduce((acc, item) => {
      const key = item["status"];
      const hasStatus = acc.find(({ status }) => status === key);

      if (hasStatus) return acc;

      acc.push({ status: key });
      return acc;
    }, []);

  return (
    <Div>
      <Sidebar sidebarMenu={sidebarMenu} />
      <Layout>
        <Reward />
      </Layout>
    </Div>
  );
};

const mapDispatchToProps = {
  setRewards,
  setUsers,
};

export default connect(null, mapDispatchToProps)(Rewards);
