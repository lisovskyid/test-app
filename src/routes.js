import Rewards from "./pages/Rewards";
import Edit from "./pages/Rewards/Reward/Edit";

export default [
  {
    path: "/rewards/new",
    exact: true,
    component: Rewards,
  },
  {
    path: "/rewards/redeemed",
    exact: true,
    component: Rewards,
  },
  {
    path: "/rewards/completed",
    exact: true,
    component: Rewards,
  },
  {
    path: "/rewards/scheduled",
    exact: true,
    component: Rewards,
  },
  {
    path: "/rewards/all",
    exact: true,
    component: Rewards,
  },
  {
    path: "/rewards/:rewardName/:rewardId",
    exact: true,
    component: Edit,
  },
];
