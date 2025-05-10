// src/components/Dashboard.jsx
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const Dashboard = ({ onLogout }) => {
  // State for bin selector and date range
  const [selectedBin, setSelectedBin] = useState("All Bins");
  const [startDate, setStartDate] = useState("2025-04-01");
  const [endDate, setEndDate] = useState("2025-05-08");

  // Dummy KPI data
  const kpis = {
    currentFill: 72,
    nextPickup: "2025-05-10",
    ch4: 3.5,
    nh3: 1.2,
  };

  // Dummy time-series data for Fill % vs Forecast
  const fillForecastData = {
    labels: ["Apr 29", "Apr 30", "May 1", "May 2", "May 3", "May 4", "May 5", "May 6", "May 7", "May 8"],
    datasets: [
      {
        label: "Actual Fill %",
        data: [65, 68, 70, 71, 73, 75, 78, 80, 72, kpis.currentFill],
        borderColor: "#00E0FF",
        backgroundColor: "rgba(0, 224, 255, 0.2)",
        tension: 0.3,
      },
      {
        label: "Forecast Fill %",
        data: [null, null, null, null, null, null, null, 82, 85, 88],
        borderColor: "#A855F7",
        backgroundColor: "rgba(168, 85, 247, 0.2)",
        borderDash: [5, 5],
        tension: 0.3,
      },
    ],
  };

  // Dummy time-series data for Gas levels vs Forecast
  const gasForecastData = {
    labels: fillForecastData.labels,
    datasets: [
      {
        label: "CH₄ Actual",
        data: [2.0, 2.1, 2.3, 2.4, 2.6, 2.8, 3.0, 3.2, 3.4, kpis.ch4],
        borderColor: "#EC4899",
        backgroundColor: "rgba(236, 72, 153, 0.2)",
        tension: 0.3,
      },
      {
        label: "NH₃ Actual",
        data: [0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.15, 1.18, kpis.nh3],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.3,
      },
      {
        label: "CH₄ Forecast",
        data: [null, null, null, null, null, null, 3.3, 3.6, 3.9, 4.2],
        borderColor: "#EC4899",
        borderDash: [5, 5],
        tension: 0.3,
      },
      {
        label: "NH₃ Forecast",
        data: [null, null, null, null, null, null, 1.3, 1.5, 1.7, 1.9],
        borderColor: "#3B82F6",
        borderDash: [5, 5],
        tension: 0.3,
      },
    ],
  };

  // Dummy alerts
  const alerts = [
    "Bin TPS_003 needs pickup",
    "High CH₄ forecast at TPS_005",
  ];

  // Dummy historical table data
  const historical = [
    { timestamp: "2025-05-08 10:00", fill: 72, ch4: 3.5, nh3: 1.2 },
    { timestamp: "2025-05-07 10:00", fill: 80, ch4: 3.4, nh3: 1.18 },
    { timestamp: "2025-05-06 10:00", fill: 78, ch4: 3.2, nh3: 1.15 },
    // ... more rows
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-40">
        <div className="flex items-center justify-center h-20 px-4 gradient-bg">
          <i className="fas fa-brain text-white text-xl mr-2"></i>
          <span className="text-xl font-bold text-white">WasteWatch Dashboard</span>
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
      <main className="ml-64 flex-1 p-6 space-y-8">
        {/* Header: Selector + Date Range */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-4 rounded-xl shadow">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
            Smart Trash Bin Dashboard
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <select
              value={selectedBin}
              onChange={(e) => setSelectedBin(e.target.value)}
              className="border rounded px-3 py-1"
            >
              <option>All Bins</option>
              <option>TPS_001</option>
              <option>TPS_002</option>
              <option>TPS_003</option>
            </select>
            <div className="flex items-center space-x-2">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border rounded px-2 py-1"
              />
              <span className="text-gray-500">to</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border rounded px-2 py-1"
              />
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <h3 className="text-sm font-medium text-gray-500">Current Fill %</h3>
            <p className="text-3xl font-bold text-gray-900">{kpis.currentFill}%</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <h3 className="text-sm font-medium text-gray-500">Next Pickup</h3>
            <p className="text-2xl font-bold text-gray-900">{kpis.nextPickup}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <h3 className="text-sm font-medium text-gray-500">CH₄ Level (ppm)</h3>
            <p className="text-2xl font-bold text-gray-900">{kpis.ch4}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <h3 className="text-sm font-medium text-gray-500">NH₃ Level (ppm)</h3>
            <p className="text-2xl font-bold text-gray-900">{kpis.nh3}</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Fill % vs Forecast
            </h2>
            <Line data={fillForecastData} options={{ responsive: true, plugins: { legend: { position: "bottom" } } }} />
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Gas Levels vs Forecast
            </h2>
            <Line data={gasForecastData} options={{ responsive: true, plugins: { legend: { position: "bottom" } } }} />
          </div>
        </div>

        {/* Alerts & Historical Data */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-md font-medium text-gray-800 mb-3">Active Alerts</h3>
            <ul className="list-disc list-inside text-red-600 space-y-1">
              {alerts.map((alert, i) => (
                <li key={i}>{alert}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow overflow-auto">
            <h3 className="text-md font-medium text-gray-800 mb-3">Historical Sensor Readings</h3>
            <table className="min-w-full text-left">
              <thead className="border-b">
                <tr>
                  <th className="px-3 py-1 text-sm text-gray-500">Timestamp</th>
                  <th className="px-3 py-1 text-sm text-gray-500">Fill %</th>
                  <th className="px-3 py-1 text-sm text-gray-500">CH₄</th>
                  <th className="px-3 py-1 text-sm text-gray-500">NH₃</th>
                </tr>
              </thead>
              <tbody>
                {historical.map((row, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2 text-sm text-gray-700">{row.timestamp}</td>
                    <td className="px-3 py-2 text-sm text-gray-700">{row.fill}</td>
                    <td className="px-3 py-2 text-sm text-gray-700">{row.ch4} ppm</td>
                    <td className="px-3 py-2 text-sm text-gray-700">{row.nh3} ppm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
