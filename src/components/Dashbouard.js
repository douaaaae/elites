import React, { useEffect, useState } from 'react';
import { BarChart2, Users, Car, Calendar, LayoutDashboard, ClipboardList, Settings } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Link } from 'react-router-dom';

import "./CarRentalDashboard.css"; // Import du CSS

export default function Dashbouard() {
  const [stats, setStats] = useState({
    totalCars: 0,
    totalReservations: 0,
    totalClients: 0,
    reservationsByMonth: []
  });

  // Fetch dashboard stats from the backend
useEffect(() => {
  const fetchStats = async () => {
    try {
      const response = await fetch('https://backend-location-rosy.vercel.app/api/admin/dashboard-stats'); // Adjust the API endpoint if needed
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched data:', data); // Log the response to see what you're getting
      setStats({
        totalCars: data.totalCars,
        totalReservations: data.totalReservations,
        totalClients: data.totalClients,
        reservationsByMonth: data.reservationsByMonth
      });
    } catch (err) {
      console.error('Error fetching dashboard stats:', err);
    }
  };

  fetchStats();
}, []);

  const menuItems = [
    { label: "Dashboard", icon: <BarChart2 size={20} />, href: "/dashboard" },
    { label: "Manage Cars", icon: <Car size={20} />, href: "/manage" },
    { label: "Log Out", icon: <Settings size={20} />, href: "/" },
  ];

  return (
    <div className='body18'>
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2 className='hajar22'>Welcome Back <br /> <span className='s1'>Imade</span></h2>
          <nav>
            {menuItems.map((item, index) => (
              <Link to={item.href} key={index} className="menu-link">
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <h1 className='hajar22'>Dashboard - Car Rental</h1>

          {/* Stat Cards */}
          <div className="stats-grid">
            <div className="card200 hajar22">
              <div>
                <p className="label200">Cars</p>
                <p className="value">{stats.totalCars}</p>
              </div>
              <Car color="#3b82f6" size={32} />
            </div>
            <div className="card200 hajar22">
              <div>
                <p className="label200">Reservations</p>
                <p className="value">{stats.totalReservations}</p>
              </div>
              <Calendar color="#22c55e" size={32} />
            </div>
            <div className="card200 hajar22">
              <div>
                <p className="label200">Users</p>
                <p className="value">{stats.totalClients}</p>
              </div>
              <Users color="#eab308" size={32} />
            </div>
          </div>

          {/* Line Chart */}
          <div className="chart-section200">
            <h2 className='hajar22'>Reservations per Month</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={stats.reservationsByMonth} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
    </div>
  );
}
