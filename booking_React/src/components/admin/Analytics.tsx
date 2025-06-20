import React, { useState } from 'react';
import Layout from '../shared/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function Analytics() {
  const [dateRange, setDateRange] = useState('7days');

  const appointmentData = [
    { name: 'Mon', appointments: 24, revenue: 3200 },
    { name: 'Tue', appointments: 28, revenue: 3800 },
    { name: 'Wed', appointments: 32, revenue: 4200 },
    { name: 'Thu', appointments: 26, revenue: 3600 },
    { name: 'Fri', appointments: 30, revenue: 4100 },
    { name: 'Sat', appointments: 22, revenue: 2900 },
    { name: 'Sun', appointments: 18, revenue: 2400 }
  ];

  const paymentMethodData = [
    { name: 'Card Payments', value: 55, color: '#3B82F6' },
    { name: 'Mobile Payments', value: 30, color: '#10B981' },
    { name: 'POS Payments', value: 15, color: '#F59E0B' }
  ];

  const doctorPerformanceData = [
    { name: 'Dr. Sarah Johnson', appointments: 45, revenue: 6750 },
    { name: 'Dr. Michael Chen', appointments: 38, revenue: 4560 },
    { name: 'Dr. Emily Rodriguez', appointments: 42, revenue: 4200 },
    { name: 'Dr. David Kim', appointments: 35, revenue: 6300 }
  ];

  const monthlyTrendData = [
    { month: 'Jan', patients: 380, revenue: 52000 },
    { month: 'Feb', patients: 420, revenue: 58000 },
    { month: 'Mar', patients: 450, revenue: 61000 },
    { month: 'Apr', patients: 480, revenue: 65000 },
    { month: 'May', patients: 520, revenue: 70000 },
    { month: 'Jun', patients: 490, revenue: 67000 }
  ];

  return (
    <Layout title="Analytics & Reports">
      <div className="space-y-6">
        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Dashboard Analytics</h2>
            <div className="flex items-center space-x-4">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Appointments</p>
                <p className="text-2xl font-bold text-gray-900">180</p>
                <p className="text-sm text-green-600">+15% this week</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">$24,200</p>
                <p className="text-sm text-green-600">+22% this week</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">New Patients</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
                <p className="text-sm text-green-600">+8% this week</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Revenue/Day</p>
                <p className="text-2xl font-bold text-gray-900">$3,457</p>
                <p className="text-sm text-green-600">+12% this week</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Daily Appointments & Revenue */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Appointments & Revenue</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={appointmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="appointments" fill="#3B82F6" name="Appointments" />
                <Bar yAxisId="right" dataKey="revenue" fill="#10B981" name="Revenue ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={paymentMethodData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {paymentMethodData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Doctor Performance */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Doctor Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={doctorPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="appointments" fill="#8B5CF6" name="Appointments" />
              <Bar yAxisId="right" dataKey="revenue" fill="#F59E0B" name="Revenue ($)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Trends */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="patients" stroke="#3B82F6" strokeWidth={2} name="Patients" />
              <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2} name="Revenue ($)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Doctors</h3>
            <div className="space-y-3">
              {doctorPerformanceData
                .sort((a, b) => b.revenue - a.revenue)
                .map((doctor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                        index === 0 ? 'bg-yellow-500' :
                        index === 1 ? 'bg-gray-400' :
                        index === 2 ? 'bg-orange-500' :
                        'bg-blue-500'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="font-medium text-gray-900">{doctor.name}</span>
                    </div>
                    <span className="text-green-600 font-medium">${doctor.revenue.toLocaleString()}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Insights</h3>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Peak Day:</strong> Wednesday shows highest appointment volume with 32 bookings.
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Revenue Growth:</strong> 22% increase in weekly revenue compared to last week.
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>Payment Preference:</strong> 55% of patients prefer card payments over other methods.
                </p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Capacity:</strong> Average utilization rate across all doctors is 78%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}