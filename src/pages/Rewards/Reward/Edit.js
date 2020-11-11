import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import Button from "../../../components/Button";
import Div from "../../../components/Div";
import { getUrlPart } from "../../../common/helpers";
import { Text, Select } from "../../../components/inputs/";
import { ls } from "../../../services";

import { rewardInitialState } from "./settings";

const Reward = ({ rewards, users }) => {
  const [reward, setReward] = useState(rewardInitialState);
  const { location } = useHistory();

  useEffect(() => {
    const onMount = () => {
      const isRewardsEmpty = rewards.length === 0;
      if (isRewardsEmpty) return;

      const id = getUrlPart(location);
      const currentReward = rewards.find(
        (reward) => reward.id.toString() === id
      );
      setReward(currentReward);
    };

    onMount();
  }, [rewards]);

  const backLink = ({ pathname }) => {
    const index = pathname.lastIndexOf("/");
    return pathname.substring(0, index);
  };

  const onSelect = (_, option) => {
    const selectedUser = users.find(({ id }) => id.toString() === option.key);
    setReward((prevState) => ({
      ...prevState,
      user: selectedUser,
    }));
  };

  const onTextInput = ({ target }) => {
    const { name, value } = target;
    setReward((prevState) => ({ ...prevState, [name]: value }));
  };

  const onEditSave = () => {
    const editedRewards = rewards.map((item) =>
      item.id === reward.id ? reward : item
    );
    ls.save("rewards", editedRewards);
  };

  return (
    <Div direction="column" width="40%">
      <Div direction="column" bottom={20}>
        <Text name="id" label="Id" value={reward.id} disabled />
        <Select
          label="users"
          list={users}
          dataName="user"
          valueKey="name"
          defaultValue={reward.user.name}
          selectedValue={reward.user.name}
          onChange={onSelect}
        />
        <Text
          name="experience"
          label="Experience"
          value={reward.experience}
          onChange={onTextInput}
        />
        <Text
          name="date"
          label="Date"
          value={reward.date}
          onChange={onTextInput}
        />
        <Text name="status" label="Status" value={reward.status} disabled />
      </Div>
      <Div justify="flex-end">
        <Button onClick={onEditSave}>
          <Link to={backLink(location)}>{`Back & Save`}</Link>
        </Button>
      </Div>
    </Div>
  );
};

const mapStateToProps = ({ rewards, users }) => ({
  rewards: rewards.list,
  users,
});

export default connect(mapStateToProps)(Reward);
