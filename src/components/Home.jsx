import { useState, useEffect } from "react";
import { Table } from "antd";
import { CheckCircleFilled, MinusCircleFilled, CloseCircleFilled } from "@ant-design/icons";

const Home = () => {
  // Function to generate random statuses
  const getRandomStatus = () => {
    const statuses = ["online", "offline", "absent"];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  // Initial accounts data
  const initialAccounts = [
    { key: 1, id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: getRandomStatus() },
    { key: 2, id: 2, name: "Bob Smith", email: "bob@example.com", role: "User", status: getRandomStatus() },
    { key: 3, id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Moderator", status: getRandomStatus() },
    { key: 4, id: 4, name: "David Williams", email: "david@example.com", role: "User", status: getRandomStatus() },
    { key: 5, id: 5, name: "Emma Davis", email: "emma@example.com", role: "Admin", status: getRandomStatus() },
  ];

  const [accounts, setAccounts] = useState(initialAccounts);

  // Simulate status updates every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAccounts((prevAccounts) =>
        prevAccounts.map((acc) => ({ ...acc, status: getRandomStatus() }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Extract unique roles dynamically for filtering
  const uniqueRoles = [...new Set(initialAccounts.map((acc) => acc.role))].map((role) => ({
    text: role,
    value: role,
  }));

  // Define table columns
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      filters: uniqueRoles,
      onFilter: (value, record) => record.role === value,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Online", value: "online" },
        { text: "Offline", value: "offline" },
        { text: "Absent", value: "absent" },
      ],
      onFilter: (value, record) => record.status === value,
      render: (status) => {
        let color, icon;
        if (status === "online") {
          color = "text-green-500";
          icon = <CheckCircleFilled className={color} />;
        } else if (status === "offline") {
          color = "text-gray-800";
          icon = <MinusCircleFilled className={color} />;
        } else {
          color = "text-red-500";
          icon = <CloseCircleFilled className={color} />;
        }
        return <span className="flex items-center gap-2">{icon} {status.charAt(0).toUpperCase() + status.slice(1)}</span>;
      },
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Account List</h1>

      {/* Ant Design Table */}
      <Table
        columns={columns}
        dataSource={accounts}
        pagination={{ pageSize: 5 }}
        bordered
      />
    </div>
  );
};

export default Home;
