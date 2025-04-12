import { 
    LineChart, Line, 
    BarChart, Bar, 
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
  } from "recharts";
  
  const Dashboard = () => {
    // Simulated daily visitors data
    const dailyVisitorsData = [
      { day: "Mon", visitors: Math.floor(Math.random() * 1000) + 500 },
      { day: "Tue", visitors: Math.floor(Math.random() * 1000) + 500 },
      { day: "Wed", visitors: Math.floor(Math.random() * 1000) + 500 },
      { day: "Thu", visitors: Math.floor(Math.random() * 1000) + 500 },
      { day: "Fri", visitors: Math.floor(Math.random() * 1000) + 500 },
      { day: "Sat", visitors: Math.floor(Math.random() * 1000) + 500 },
      { day: "Sun", visitors: Math.floor(Math.random() * 1000) + 500 },
    ];
  
    // Simulated monthly visitors data
    const monthlyVisitorsData = [
      { month: "Jan", visitors: Math.floor(Math.random() * 20000) + 5000 },
      { month: "Feb", visitors: Math.floor(Math.random() * 20000) + 5000 },
      { month: "Mar", visitors: Math.floor(Math.random() * 20000) + 5000 },
      { month: "Apr", visitors: Math.floor(Math.random() * 20000) + 5000 },
      { month: "May", visitors: Math.floor(Math.random() * 20000) + 5000 },
      { month: "Jun", visitors: Math.floor(Math.random() * 20000) + 5000 },
      { month: "Jul", visitors: Math.floor(Math.random() * 20000) + 5000 },
      { month: "Aug", visitors: Math.floor(Math.random() * 20000) + 5000 },
      { month: "Sep", visitors: Math.floor(Math.random() * 20000) + 5000 },
      { month: "Oct", visitors: Math.floor(Math.random() * 20000) + 5000 },
      { month: "Nov", visitors: Math.floor(Math.random() * 20000) + 5000 },
      { month: "Dec", visitors: Math.floor(Math.random() * 20000) + 5000 },
    ];
  
    // Simulated daily account registrations data
    const dailyRegistrationsData = [
      { day: "Mon", registrations: Math.floor(Math.random() * 50) + 10 },
      { day: "Tue", registrations: Math.floor(Math.random() * 50) + 10 },
      { day: "Wed", registrations: Math.floor(Math.random() * 50) + 10 },
      { day: "Thu", registrations: Math.floor(Math.random() * 50) + 10 },
      { day: "Fri", registrations: Math.floor(Math.random() * 50) + 10 },
      { day: "Sat", registrations: Math.floor(Math.random() * 50) + 10 },
      { day: "Sun", registrations: Math.floor(Math.random() * 50) + 10 },
    ];
  
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
  
        {/* Daily Visitors Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-4">Daily Visitors</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyVisitorsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visitors" stroke="#8884d8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
  
        {/* Daily Account Registrations Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-4">Daily Account Registrations</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyRegistrationsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="registrations" stroke="#ff7300" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
  
        {/* Monthly Visitors Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Monthly Visitors</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyVisitorsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="visitors" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  