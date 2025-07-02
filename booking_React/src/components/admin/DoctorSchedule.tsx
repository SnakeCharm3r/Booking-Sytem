import React, { useState } from 'react';
import Layout from '../shared/Layout';
import { Clock,  Plus, Edit, Trash2 } from 'lucide-react';
import { format, startOfWeek, addDays, isSameDay } from 'date-fns';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  color: string;
}

interface Schedule {
  id: string;
  doctorId: string;
  date: string;
  startTime: string;
  endTime: string;
  maxPatients: number;
  bookedPatients: number;
}

export default function DoctorSchedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [showAddModal, setShowAddModal] = useState(false);

  const doctors: Doctor[] = [
    { id: '1', name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', color: 'bg-blue-500' },
    { id: '2', name: 'Dr. Michael Chen', specialty: 'Dermatologist', color: 'bg-green-500' },
    { id: '3', name: 'Dr. Emily Rodriguez', specialty: 'Pediatrician', color: 'bg-purple-500' },
    { id: '4', name: 'Dr. David Kim', specialty: 'Orthopedic', color: 'bg-orange-500' }
  ];

  const [schedules, setSchedules] = useState<Schedule[]>([
    {
      id: '1',
      doctorId: '1',
      date: format(new Date(), 'yyyy-MM-dd'),
      startTime: '09:00',
      endTime: '12:00',
      maxPatients: 12,
      bookedPatients: 8
    },
    {
      id: '2',
      doctorId: '1',
      date: format(new Date(), 'yyyy-MM-dd'),
      startTime: '14:00',
      endTime: '17:00',
      maxPatients: 12,
      bookedPatients: 5
    },
    {
      id: '3',
      doctorId: '2',
      date: format(new Date(), 'yyyy-MM-dd'),
      startTime: '10:00',
      endTime: '13:00',
      maxPatients: 9,
      bookedPatients: 7
    }
  ]);

  const weekStart = startOfWeek(selectedDate);
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const getSchedulesForDate = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return schedules.filter(schedule => schedule.date === dateStr);
  };

  const getDoctorById = (id: string) => {
    return doctors.find(doctor => doctor.id === id);
  };

  return (
    <Layout title="Doctor Schedule Management">
      <div className="space-y-6">
        {/* Header Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Week
                </label>
                <input
                  type="date"
                  value={format(selectedDate, 'yyyy-MM-dd')}
                  onChange={(e) => setSelectedDate(new Date(e.target.value))}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Select a date"
                  title="Select week start date"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Doctor
                </label>
                <select
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Doctors</option>
                  {doctors.map(doctor => (
                    <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Add Schedule</span>
            </button>
          </div>
        </div>

        {/* Weekly Calendar View */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-7 gap-0 border-b">
            {weekDays.map((day, index) => (
              <div key={index} className="p-4 text-center border-r border-gray-200 last:border-r-0">
                <div className="text-sm font-medium text-gray-900">
                  {format(day, 'EEE')}
                </div>
                <div className={`text-lg font-bold mt-1 ${
                  isSameDay(day, new Date()) ? 'text-blue-600' : 'text-gray-700'
                }`}>
                  {format(day, 'd')}
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-0 min-h-96">
            {weekDays.map((day, index) => {
              const daySchedules = getSchedulesForDate(day);
              const filteredSchedules = selectedDoctor 
                ? daySchedules.filter(s => s.doctorId === selectedDoctor)
                : daySchedules;
              
              return (
                <div key={index} className="p-2 border-r border-gray-200 last:border-r-0 min-h-full">
                  <div className="space-y-2">
                    {filteredSchedules.map((schedule) => {
                      const doctor = getDoctorById(schedule.doctorId);
                      if (!doctor) return null;
                      
                      return (
                        <div
                          key={schedule.id}
                          className={`p-2 rounded-lg text-white text-xs ${doctor.color}`}
                        >
                          <div className="font-medium truncate">{doctor.name}</div>
                          <div className="flex items-center space-x-1 mt-1">
                            <Clock className="h-3 w-3" />
                            <span>{schedule.startTime}-{schedule.endTime}</span>
                          </div>
                          <div className="mt-1">
                            {schedule.bookedPatients}/{schedule.maxPatients} patients
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Schedule List View */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Schedule Details</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Doctor</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Time</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Patients</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Utilization</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {schedules
                  .filter(schedule => !selectedDoctor || schedule.doctorId === selectedDoctor)
                  .map((schedule) => {
                    const doctor = getDoctorById(schedule.doctorId);
                    const utilization = (schedule.bookedPatients / schedule.maxPatients) * 100;
                    
                    return (
                      <tr key={schedule.id} className="border-b border-gray-100">
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${doctor?.color}`}></div>
                            <div>
                              <div className="font-medium text-gray-900">{doctor?.name}</div>
                              <div className="text-sm text-gray-600">{doctor?.specialty}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-900">{schedule.date}</td>
                        <td className="py-3 px-4 text-gray-600">
                          {schedule.startTime} - {schedule.endTime}
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          {schedule.bookedPatients}/{schedule.maxPatients}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-20 bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  utilization >= 80 ? 'bg-red-500' :
                                  utilization >= 60 ? 'bg-yellow-500' :
                                  'bg-green-500'
                                }`}
                                style={{ width: `${utilization}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600">{utilization.toFixed(0)}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-800" title="Edit Schedule">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-800" title="Delete Schedule">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}