import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PatientDashboard from './components/patient/PatientDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import BookAppointment from './components/patient/BookAppointment';
import PaymentPage from './components/payment/PaymentPage';
import DoctorSchedule from './components/admin/DoctorSchedule';
import Analytics from './components/admin/Analytics';
import UserManagement from './components/admin/UserManagement';
import PaymentManagement from './components/admin/PaymentManagement';
import Landing from './pages/landing'; // <-- Add this import

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Landing />} /> {/* <-- Add this route */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/patient/*" element={<ProtectedRoute role="patient"><PatientRoutes /></ProtectedRoute>} />
            <Route path="/admin/*" element={<ProtectedRoute role="admin"><AdminRoutes /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

function ProtectedRoute({ children, role }: { children: React.ReactNode; role: string }) {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (user?.role !== role) {
    return <Navigate to={`/${user?.role}`} replace />;
  }
  
  return <>{children}</>;
}

function PatientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PatientDashboard />} />
      <Route path="/book" element={<BookAppointment />} />
      <Route path="/payment/:appointmentId" element={<PaymentPage />} />
    </Routes>
  );
}

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/schedule" element={<DoctorSchedule />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/users" element={<UserManagement />} />
      <Route path="/payments" element={<PaymentManagement />} />
    </Routes>
  );
}

export default App;