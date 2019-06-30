const routes = [
  {
    key: "dataBase",
    path: "/dataBase",
    title: "数据库",
    icon: "pie-chart"
  },
  {
    key: "dataTable",
    path: "/dataTable",
    title: "数据表",
    icon: "radar-chart",
    children: [
      {
        key: "Hive",
        path: "/dataTable/Hive",
        title: "Hive数据表",
        icon: "sketch"
      },
      {
        key: "Kafka",
        path: "/dataTable/Kafka",
        title: "Kafka Topic",
        icon: "sketch"
      },
      {
        key: "Rdb",
        path: "/dataTable/Rdb",
        title: "Rdb数据表",
        icon: "sketch"
      }
    ]
  }
];

export default routes;
