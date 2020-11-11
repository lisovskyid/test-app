export const tableColumns = [
  {
    title: "id",
    key: "id",
    dataIndex: "id",
    align: "center",
  },
  {
    title: "User name",
    key: "userName",
    align: "center",
    render: (_, { user }) => user.name,
  },
  {
    title: "Experience",
    key: "experience",
    dataIndex: "experience",
    align: "center",
  },
  {
    title: "Date",
    key: "date",
    dataIndex: "date",
    align: "center",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    align: "center",
  },
];

export const filterData = ["Joe Smith", "bla bla", "Sue Mae"];
export const rewardInitialState = { user: {} };
