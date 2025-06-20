import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../shared/Layout';
import { Search, User, Calendar, Clock, DollarSign } from 'lucide-react';

export default function BookAppointment() {
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  const mockDoctors = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      fee: 150,
      rating: 4.8,
      availableSlots: ['09:00', '10:00', '11:00', '14:00', '15:00']
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      fee: 120,
      rating: 4.9,
      availableSlots: ['09:30', '10:30', '13:00', '14:30', '16:00']
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      fee: 100,
      rating: 4.7,
      availableSlots: ['08:00', '09:00', '10:00', '11:00', '15:00']
    },
    {
      id: '4',
      name: 'Dr. David Kim',
      specialty: 'Orthopedic',
      fee: 180,
      rating: 4.6,
      availableSlots: ['09:00', '10:30', '13:30', '15:00', '16:30']
    }
  ];

  const filteredDoctors = mockDoctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedDoctorData = mockDoctors.find(doc => doc.id === selectedDoctor);

  const handleBookAppointment = () => {
    if (selectedDoctor && selectedDate && selectedTime) {
      const appointmentId = `${selectedDoctor}-${selectedDate}-${selectedTime}`;
      navigate(`/patient/payment/${appointmentId}`);
    }
  };

  return (
    <Layout title="Book Appointment">
      <div className="space-y-8">
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Find a Doctor</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by doctor name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Doctor Selection */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedDoctor === doctor.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedDoctor(doctor.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <User className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{doctor.name}</h3>
                      <p className="text-sm text-gray-600">{doctor.specialty}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm text-gray-600">⭐ {doctor.rating}</span>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">${doctor.fee}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    selectedDoctor === doctor.id
                      ? 'bg-blue-500 border-blue-500'
                      : 'border-gray-300'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Date and Time Selection */}
        {selectedDoctorData && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Date & Time</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Available Times
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {selectedDoctorData.availableSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                        selectedTime === time
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Appointment Summary */}
        {selectedDoctorData && selectedDate && selectedTime && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Appointment Summary</h2>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Doctor:</span>
                <span className="font-medium">{selectedDoctorData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Specialty:</span>
                <span className="font-medium">{selectedDoctorData.specialty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium">{selectedTime}</span>
              </div>
              <div className="flex justify-between border-t pt-3">
                <span className="text-gray-600">Consultation Fee:</span>
                <span className="font-semibold text-lg">${selectedDoctorData.fee}</span>
              </div>
            </div>
            <button
              onClick={handleBookAppointment}
              className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
            >
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}