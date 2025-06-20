import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../shared/Layout';
import { Users, Calendar, DollarSign, TrendingUp, BarChart3, Settings } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Patients',
      value: '1,900',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Appointments Today',
      value: '36',
      change: '+8%',
      trend: 'up',
      icon: Calendar,
      color: 'green'
    },
    {
      title: 'Revenue This Month',
      value: '$24,580',
      change: '+18%',
      trend: 'up',
      icon: DollarSign,
      color: 'purple'
    },
    {
      title: 'Active Doctors',
      value: '18',
      change: '+2',
      trend: 'up',
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  const recentAppointments = [
    {
      id: '1',
      patient: 'John Doe',
      doctor: 'Dr. Sarah Johnson',
      time: '10:00 AM',
      status: 'confirmed',
      fee: '$150'
    },
    {
      id: '2',
      patient: 'Jane Smith',
      doctor: 'Dr. Michael Chen',
      time: '11:30 AM',
      status: 'pending',
      fee: '$120'
    },
    {
      id: '3',
      patient: 'Bob Wilson',
      doctor: 'Dr. Emily Rodriguez',
      time: '2:00 PM',
      status: 'completed',
      fee: '$100'
    }
  ];

  return (
    <Layout title="Admin Dashboard">
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className={`text-sm mt-1 ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${
                    stat.color === 'blue' ? 'bg-blue-100' :
                    stat.color === 'green' ? 'bg-green-100' :
                    stat.color === 'purple' ? 'bg-purple-100' :
                    'bg-orange-100'
                  }`}>
                    <Icon className={`h-6 w-6 ${
                      stat.color === 'blue' ? 'text-blue-600' :
                      stat.color === 'green' ? 'text-green-600' :
                      stat.color === 'purple' ? 'text-purple-600' :
                      'text-orange-600'
                    }`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              to="/admin/schedule"
              className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Calendar className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">Doctor Schedule</h3>
                <p className="text-sm text-gray-600">Manage doctor schedules</p>
              </div>
            </Link>
            <Link
              to="/admin/users"
              className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
            >
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">User Management</h3>
                <p className="text-sm text-gray-600">View and manage users</p>
              </div>
            </Link>
            <Link
              to="/admin/analytics"
              className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <BarChart3 className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">Analytics</h3>
                <p className="text-sm text-gray-600">View reports and analytics</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Appointments */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Appointments</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Patient</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Doctor</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Time</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Fee</th>
                </tr>
              </thead>
              <tbody>
                {recentAppointments.map((appointment) => (
                  <tr key={appointment.id} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">{appointment.patient}</td>
                    <td className="py-3 px-4 text-gray-600">{appointment.doctor}</td>
                    <td className="py-3 px-4 text-gray-600">{appointment.time}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                        appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-900">{appointment.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Schedule</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Morning Appointments</span>
                <span className="font-medium">12/15</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Afternoon Appointments</span>
                <span className="font-medium">18/20</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Evening Appointments</span>
                <span className="font-medium">6/10</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Card Payments</span>
                <span className="font-medium">$8,420</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Mobile Payments</span>
                <span className="font-medium">$3,280</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">POS Payments</span>
                <span className="font-medium">$1,850</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}