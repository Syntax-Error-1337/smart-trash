// src/components/Dashboard.jsx
import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Dashboard = ({ onLogout }) => {
  const fillLevelData = {
    labels: ["Bin #1", "Bin #2", "Bin #3", "Bin #4", "Bin #5"],
    datasets: [
      {
        label: "Fill Level (%)",
        data: [45, 78, 66, 93, 58],
        backgroundColor: "#00E0FF",
      },
    ],
  };

  const compositionData = {
    labels: ["Plastic", "Organic", "Metal", "Glass", "Other"],
    datasets: [
      {
        label: "Waste Composition",
        data: [30, 25, 15, 20, 10],
        backgroundColor: [
          "#00E0FF",
          "#0072FF",
          "#A855F7",
          "#EC4899",
          "#3B82F6",
        ],
      },
    ],
  };

  const routeEfficiencyData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Route Efficiency (%)",
        data: [85, 90, 87, 92, 88],
        borderColor: "#A855F7",
        backgroundColor: "#A855F7",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-40">
        <div className="flex items-center justify-center h-20 px-4 gradient-bg">
          <i className="fas fa-brain text-white text-xl mr-2"></i>
          <span className="text-xl font-bold text-white">EcoAI Dashboard</span>
        </div>
        <nav className="mt-6 px-4 space-y-2">
          <div className="flex items-center px-4 py-3 text-gray-600 bg-gray-100 rounded-lg">
            <i className="fas fa-tachometer-alt text-primary mr-3"></i>
            <span className="font-medium">Dashboard</span>
          </div>
        </nav>
        <div className="absolute bottom-0 px-4 py-6 w-full">
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Admin"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">John Smith</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
            <button
              onClick={onLogout}
              className="ml-auto flex items-center gap-1 text-gray-500 hover:text-red-500 transition"
            >
              <i className="fas fa-sign-out-alt"></i>
              <span className="text-sm hidden md:inline">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-6 space-y-10">
        {/* Top Bar */}
        <header className="bg-white rounded-xl shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-gray-900">
            AI Waste Management Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <i className="fas fa-bell text-gray-500 relative">
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </i>
            <i className="fas fa-envelope text-gray-500 relative">
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </i>
            <i className="fas fa-robot text-gray-500 relative">
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            </i>
          </div>
        </header>

        {/* Graphs */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Trash Bin Fill Levels
            </h2>
            <Bar
              data={fillLevelData}
              options={{
                responsive: true,
                plugins: { legend: { display: false } },
              }}
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Waste Composition
            </h2>
            <Doughnut data={compositionData} options={{ responsive: true }} />
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Route Efficiency (ML Insights)
          </h2>
          <Line data={routeEfficiencyData} options={{ responsive: true }} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
