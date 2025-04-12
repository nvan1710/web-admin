import { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Input, List, Select } from "antd";

const { Option } = Select;

const Profile = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    totalGames: 5,
  });

  const [gameHistory, setGameHistory] = useState([]);
  const [sortedGames, setSortedGames] = useState([]);
  const [sortBy, setSortBy] = useState("date");

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isReplayModalVisible, setIsReplayModalVisible] = useState(false);
  const [selectedMoves, setSelectedMoves] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const mockData = [
      {
        key: 1,
        gameId: "G001",
        date: "2024-03-20",
        result: "Win",
        moves: ["Move 1: E2 to E4", "Move 2: E7 to E5", "Move 3: G1 to F3"],
      },
      {
        key: 2,
        gameId: "G002",
        date: "2024-03-18",
        result: "Loss",
        moves: ["Move 1: D2 to D4", "Move 2: D7 to D5", "Move 3: C1 to F4"],
      },
      {
        key: 3,
        gameId: "G003",
        date: "2024-03-15",
        result: "Win",
        moves: ["Move 1: G2 to G4", "Move 2: D7 to D5", "Move 3: F1 to H3"],
      },
    ];
    setGameHistory(mockData);
    setSortedGames(mockData);
  }, []);

  // Sorting Function
  const handleSortChange = (value) => {
    setSortBy(value);
    const sorted = [...gameHistory].sort((a, b) => {
      if (value === "date") return new Date(b.date) - new Date(a.date);
      if (value === "result") return a.result.localeCompare(b.result);
      return 0;
    });
    setSortedGames(sorted);
  };

  const columns = [
    { title: "Game ID", dataIndex: "gameId", key: "gameId" },
    { title: "Date", dataIndex: "date", key: "date" },
    {
      title: "Result",
      dataIndex: "result",
      key: "result",
      filters: [
        { text: "Win", value: "Win" },
        { text: "Loss", value: "Loss" },
      ],
      onFilter: (value, record) => record.result === value,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button
          type="primary"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
          onClick={() => handleReplay(record.moves)}
        >
          Replay
        </Button>
      ),
    },
  ];

  const handleReplay = (moves) => {
    setSelectedMoves(moves);
    setIsReplayModalVisible(true);
  };

  const handleEditProfile = () => {
    form.setFieldsValue({ name: user.name, email: user.email });
    setIsEditModalVisible(true);
  };

  const handleSaveProfile = () => {
    form.validateFields().then((values) => {
      setUser((prevUser) => ({
        ...prevUser,
        name: values.name,
        email: values.email,
      }));
      setIsEditModalVisible(false);
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Profile Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Profile Information</h2>
        <p className="text-gray-600">Name: {user.name}</p>
        <p className="text-gray-600">Email: {user.email}</p>
        <p className="text-gray-600">Total Games Played: {user.totalGames}</p>

        <Button
          className="mt-4 bg-green-500 text-white px-6 py-2 rounded shadow-lg hover:bg-green-600 transition"
          onClick={handleEditProfile}
        >
          Edit Profile
        </Button>
      </div>

      {/* Sorting Dropdown */}
      <div className="mb-4">
        <label className="font-medium mr-2">Sort by:</label>
        <Select value={sortBy} onChange={handleSortChange} className="w-48">
          <Option value="date">Date</Option>
          <Option value="result">Result</Option>
        </Select>
      </div>

      {/* Game History Table */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Game History</h2>
      <Table columns={columns} dataSource={sortedGames} pagination={{ pageSize: 5 }} bordered />

      {/* Move History Modal */}
      <Modal
        title="Move History"
        open={isReplayModalVisible}
        onCancel={() => setIsReplayModalVisible(false)}
        footer={null}
      >
        <List dataSource={selectedMoves} renderItem={(move) => <List.Item>{move}</List.Item>} />
      </Modal>

      {/* Edit Profile Modal */}
      <Modal
        title="Edit Profile"
        open={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsEditModalVisible(false)}>
            Cancel
          </Button>,
          <Button
            key="ok"
            type="primary"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
            onClick={handleSaveProfile}
          >
            OK
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter your name" }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Profile;
