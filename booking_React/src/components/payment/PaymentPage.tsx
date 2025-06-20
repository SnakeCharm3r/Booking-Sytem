import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../shared/Layout';
import { CreditCard, Smartphone, Monitor, Shield, CheckCircle } from 'lucide-react';

export default function PaymentPage() {
  const { appointmentId } = useParams();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'mobile' | 'pos'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const mockAppointment = {
    doctor: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    date: '2024-01-15',
    time: '10:00 AM',
    fee: 150
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      
      // Redirect to dashboard after completion
      setTimeout(() => {
        navigate('/patient');
      }, 3000);
    }, 2000);
  };

  if (isCompleted) {
    return (
      <Layout title="Payment Successful">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-green-100 rounded-full">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">
              Your appointment has been confirmed. You will receive a confirmation email shortly.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Appointment ID:</span>
                <span className="font-medium">{appointmentId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount Paid:</span>
                <span className="font-medium">${mockAppointment.fee}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Redirecting to dashboard...
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Payment">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Appointment Details */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Appointment Details</h2>
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Doctor:</span>
              <span className="font-medium">{mockAppointment.doctor}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Specialty:</span>
              <span className="font-medium">{mockAppointment.specialty}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date & Time:</span>
              <span className="font-medium">{mockAppointment.date} at {mockAppointment.time}</span>
            </div>
            <div className="flex justify-between border-t pt-3">
              <span className="text-gray-600">Total Amount:</span>
              <span className="font-semibold text-lg">${mockAppointment.fee}</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Method</h2>
          <div className="space-y-4">
            <div
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                paymentMethod === 'card'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setPaymentMethod('card')}
            >
              <div className="flex items-center space-x-3">
                <CreditCard className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Credit/Debit Card</h3>
                  <p className="text-sm text-gray-600">Pay securely with your card</p>
                </div>
                <div className={`w-4 h-4 rounded-full border-2 ml-auto ${
                  paymentMethod === 'card'
                    ? 'bg-blue-500 border-blue-500'
                    : 'border-gray-300'
                }`} />
              </div>
            </div>

            <div
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                paymentMethod === 'mobile'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setPaymentMethod('mobile')}
            >
              <div className="flex items-center space-x-3">
                <Smartphone className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="font-medium text-gray-900">Mobile Payment</h3>
                  <p className="text-sm text-gray-600">Pay with mobile money</p>
                </div>
                <div className={`w-4 h-4 rounded-full border-2 ml-auto ${
                  paymentMethod === 'mobile'
                    ? 'bg-blue-500 border-blue-500'
                    : 'border-gray-300'
                }`} />
              </div>
            </div>

            <div
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                paymentMethod === 'pos'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setPaymentMethod('pos')}
            >
              <div className="flex items-center space-x-3">
                <Monitor className="h-6 w-6 text-purple-600" />
                <div>
                  <h3 className="font-medium text-gray-900">POS Terminal</h3>
                  <p className="text-sm text-gray-600">Pay at clinic terminal</p>
                </div>
                <div className={`w-4 h-4 rounded-full border-2 ml-auto ${
                  paymentMethod === 'pos'
                    ? 'bg-blue-500 border-blue-500'
                    : 'border-gray-300'
                }`} />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        {paymentMethod === 'card' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Card Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

        {paymentMethod === 'mobile' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Mobile Payment</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Provider
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>M-Pesa</option>
                  <option>Airtel Money</option>
                  <option>MTN Mobile Money</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {paymentMethod === 'pos' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">POS Payment</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                You have selected to pay at the clinic's POS terminal. Please proceed with your appointment and complete payment at the clinic.
              </p>
            </div>
          </div>
        )}

        {/* Security Notice */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-3">
            <Shield className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Secure Payment</h3>
          </div>
          <p className="text-sm text-gray-600">
            Your payment information is encrypted and secure. We use industry-standard security measures to protect your data.
          </p>
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium text-lg disabled:opacity-50"
        >
          {isProcessing ? 'Processing Payment...' : `Pay $${mockAppointment.fee}`}
        </button>
      </div>
    </Layout>
  );
}