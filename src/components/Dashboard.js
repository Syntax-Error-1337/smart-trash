// src/components/Dashboard.jsx
import React, { useState, useEffect } from "react";
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
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsService,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// Base URL for backend API
const API_BASE = "https://wastewatchbe.satyaadhiyaksa.com";

const Dashboard = ({ onLogout }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "xxx",
  });

  // State
  const [bins, setBins] = useState([]);
  const [selectedBin, setSelectedBin] = useState("");
  const [startDate, setStartDate] = useState("2025-04-01");
  const [endDate, setEndDate] = useState("2025-05-08");

  const [kpis, setKpis] = useState({
    current_fill: 0,
    next_pickup: "",
    ch4: 0,
    nh3: 0,
  });
  const [forecast, setForecast] = useState([]);
  const [history, setHistory] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const [binCoords, setBinCoords] = useState([]);
  const [orderedCoords, setOrderedCoords] = useState([]);
  const [directions, setDirections] = useState(null);

  const chartOptions = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      tooltip: {
        callbacks: {
          // Show the full datetime in tooltip
          title: (tooltipItems) => {
            const index = tooltipItems[0].dataIndex;
            const rawTimestamp = forecast[index]?.timestamp;
            if (!rawTimestamp) return tooltipItems[0].label;
            const date = new Date(rawTimestamp);

            return date.toLocaleString(undefined, {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false, // set to true for AM/PM format
            });
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };

  // Load bins on mount
  useEffect(() => {
    fetch(`${API_BASE}/bins`)
      .then((res) => res.json())
      .then((data) => {
        setBins(data);
        if (data.length) setSelectedBin(data[0].id);
      })
      .catch(console.error);
  }, []);

  // Load data for selected bin
  useEffect(() => {
    if (!selectedBin) return;

    // KPI
    fetch(`${API_BASE}/bins/${selectedBin}/kpi`)
      .then((res) => res.json())
      .then(setKpis)
      .catch(console.error);

    // Forecast
    fetch(`${API_BASE}/bins/${selectedBin}/forecast`)
      .then((res) => res.json())
      .then(setForecast)
      .catch(console.error);

    // History
    fetch(`${API_BASE}/bins/${selectedBin}/history`)
      .then((res) => res.json())
      .then(setHistory)
      .catch(console.error);

    // Alerts
    fetch(`${API_BASE}/bins/${selectedBin}/alerts`)
      .then((res) => res.json())
      .then((json) => setAlerts(json.alerts))
      .catch(console.error);

    // Set coordinates for route optimization (example: use bin and its neighbors)
    const coords = bins.map((b) => ({ lat: b.latitude, lng: b.longitude }));
    setBinCoords(coords);
  }, [selectedBin, bins]);

  // Optimize route when coords change
  useEffect(() => {
    if (binCoords.length < 2) return;
    fetch(`${API_BASE}/optimize-route`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locations: binCoords }),
    })
      .then((res) => res.json())
      .then((json) => {
        setOrderedCoords(json.route);
      })
      .catch(console.error);
  }, [binCoords]);

  // Request Google Directions
  useEffect(() => {
    if (!isLoaded || !orderedCoords.length) return;
    const service = new window.google.maps.DirectionsService();
    const origin = orderedCoords[0];
    const destination = origin;
    const waypoints = orderedCoords
      .slice(1, -1)
      .map((loc) => ({ location: loc, stopover: true }));
    service.route(
      {
        origin,
        destination,
        waypoints,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error("Directions request failed: ", status);
        }
      }
    );
  }, [isLoaded, orderedCoords]);

  // Prepare chart data
  const fillData = {
    labels: forecast.map((pt) => new Date(pt.timestamp).toLocaleDateString()),
    datasets: [
      {
        label: "Actual Fill %",
        data: history.map((h) => h.fill).reverse(),
        borderColor: "#00E0FF",
        backgroundColor: "rgba(0,224,255,0.2)",
      },
      {
        label: "Forecast Fill %",
        data: forecast.map((f) => f.fill),
        borderColor: "#A855F7",
        backgroundColor: "rgba(168,85,247,0.2)",
        borderDash: [5, 5],
      },
    ],
  };

  const gasData = {
    labels: fillData.labels,
    datasets: [
      {
        label: "CH₄",
        data: history.map((h) => h.ch4).reverse(),
        borderColor: "#EC4899",
      },
      {
        label: "NH₃",
        data: history.map((h) => h.nh3).reverse(),
        borderColor: "#3B82F6",
      },
      {
        label: "CH₄ Forecast",
        data: forecast.map((f) => f.ch4),
        borderColor: "#EC4899",
        borderDash: [5, 5],
      },
      {
        label: "NH₃ Forecast",
        data: forecast.map((f) => f.nh3),
        borderColor: "#3B82F6",
        borderDash: [5, 5],
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-40">
        <div className="flex items-center justify-center h-20 px-4 gradient-bg">
          <i className="fas fa-brain text-white text-xl mr-2"></i>
          <span className="text-xl font-bold text-white">
            WasteWatch Dashboard
          </span>
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
              <p className="text-sm font-medium text-gray-800">User</p>
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
      <main className="ml-64 flex-1 p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow">
          <h1 className="text-2xl font-bold text-gray-900">
            WasteWatch Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <select
              value={selectedBin}
              onChange={(e) => setSelectedBin(e.target.value)}
              className="border rounded px-3 py-1"
            >
              {bins.map((b) => (
                <option key={b.id}>{b.id}</option>
              ))}
            </select>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border rounded px-2 py-1"
            />
            <span>to</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border rounded px-2 py-1"
            />
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <h3 className="text-sm font-medium text-gray-500">
              Current Fill %
            </h3>
            <p className="text-3xl font-bold text-gray-900">
              {kpis.current_fill}%
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <h3 className="text-sm font-medium text-gray-500">Next Pickup</h3>
            <p className="text-2xl font-bold text-gray-900">
              {new Date(kpis.next_pickup).toLocaleDateString()}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <h3 className="text-sm font-medium text-gray-500">CH₄ (ppm)</h3>
            <p className="text-2xl font-bold text-gray-900">{kpis.ch4}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <h3 className="text-sm font-medium text-gray-500">NH₃ (ppm)</h3>
            <p className="text-2xl font-bold text-gray-900">{kpis.nh3}</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Fill % vs Forecast
            </h2>
            <Line data={fillData} options={chartOptions} />
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Gas Levels vs Forecast
            </h2>
            <Line data={gasData} options={chartOptions} />
          </div>
        </div>

        {/* Optimized Route Map */}
        {isLoaded && directions && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Optimized Collection Route
            </h2>
            <GoogleMap
              mapContainerStyle={{
                height: "16rem",
                width: "100%",
                borderRadius: "0.5rem",
              }}
              center={orderedCoords[0]}
              zoom={13}
            >
              <DirectionsRenderer options={{ directions }} />

              {/** START MARKER **/}
              <Marker
                position={orderedCoords[0]}
                label="A"
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                }}
              />

              {/** WAYPOINT MARKERS, labeled 2…n-1 **/}
              {orderedCoords.slice(1, -1).map((loc, i) => (
                <Marker
                  key={i}
                  position={loc}
                  label={`${i + 2}`}
                  icon={{
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                  }}
                />
              ))}

              {/** END MARKER **/}
              <Marker
                position={orderedCoords[orderedCoords.length - 1]}
                label="Z"
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                }}
              />
            </GoogleMap>
          </div>
        )}

        {/* Alerts & History */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-md font-medium text-gray-800 mb-3">
              Active Alerts
            </h3>
            <ul className="list-disc list-inside text-red-600 space-y-1">
              {alerts.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow overflow-auto">
            <h3 className="text-md font-medium text-gray-800 mb-3">
              Historical Sensor Readings
            </h3>
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
                {history.map((row, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2 text-sm text-gray-700">
                      {new Date(row.timestamp).toLocaleString()}
                    </td>
                    <td className="px-3 py-2 text-sm text-gray-700">
                      {row.fill}
                    </td>
                    <td className="px-3 py-2 text-sm text-gray-700">
                      {row.ch4} ppm
                    </td>
                    <td className="px-3 py-2 text-sm text-gray-700">
                      {row.nh3} ppm
                    </td>
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
