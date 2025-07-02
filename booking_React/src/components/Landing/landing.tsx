import React, { useState } from "react";
import { Calendar, Check, Stethoscope } from "lucide-react"; // <-- Add Stethoscope icon import
import Layout from '../shared/Layout';

const services = [
  "Physiotherapy",
  "Ophthalmology",
  "ENT (Ear, Nose & Throat)",
  "Gynecology",
  "Pediatrics",
  "Orthopedics",
  "Dental",
  "Obstetrics",
  "Rehabilitation",
  "Radiology",
  "General Surgery",
  "Urology",
  "Plastic Surgery",
  "Nutrition Counseling"
];

const diagnostics = [
  "X-Ray",
  "Ultrasound",
  "Laboratory Tests",
  "CT Scan",
  "MRI",
  "Blood Test",
  "ECG"
];

export default function LandingPage() {
  const [selectedCategory, setSelectedCategory] = useState<"service" | "diagnostics">("service");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDiagnostic, setSelectedDiagnostic] = useState("");
  const [date, setDate] = useState("");

  // Example submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle the submission logic here
    if (selectedCategory === "service") {
      alert(`Service: ${selectedService}\nDate: ${date}`);
    } else {
      alert(`Diagnostic: ${selectedDiagnostic}\nDate: ${date}`);
    }
  };

  return (
  <Layout title="Booking Section">
    <div className="p-6 bg-transparent min-h-screen space-y-10">

      {/* Carousel Section */}
      <div id="controls-carousel" className="relative w-full mb-8" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* Item 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 5 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>
        {/* Slider controls */}
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
        {/* Welcome Card */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome to the Booking System
          </h1>
          <p className="text-gray-600 mb-6">
            Choose a category to proceed with your appointment
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            <button
              className={`px-6 py-2 rounded-lg font-semibold text-white transition 
                ${selectedCategory === "service" ? "bg-blue-600" : "bg-blue-400 hover:bg-blue-600"}`}
              onClick={() => setSelectedCategory("service")}
            >
              Service
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-semibold text-white transition 
                ${selectedCategory === "diagnostics" ? "bg-green-600" : "bg-green-400 hover:bg-green-600"}`}
              onClick={() => setSelectedCategory("diagnostics")}
            >
              Diagnostics
            </button>
          </div>
        </div>

        {selectedCategory === "service" ? (
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Stethoscope className="w-5 h-5 mr-2 text-blue-600" /> Schedule a Service
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {services.map((service, idx) => (
                <button
                  key={idx}
                  className={`w-full py-3 rounded-lg font-semibold transition
                    border border-gray-200
                    ${selectedService === service
                      ? "bg-blue-600 text-white"
                      : "bg-transparent text-blue-700 hover:bg-blue-100"}
                  `}
                  onClick={() => setSelectedService(service)}
                  type="button"
                  style={{ minHeight: "48px" }}
                >
                  {service}
                </button>
              ))}
            </div>

            {/* Show form if a service is selected */}
            {selectedService && (
              <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
                <div className="flex items-center">
                  <input
                    id="fastTrack"
                    type="checkbox"
                    className="mr-2"
                  />
                  <label htmlFor="fastTrack" className="text-gray-700">Fast Track Service</label>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Select Doctor</label>
                  <select
                    className="w-full border rounded px-3 py-2"
                    defaultValue=""
                  >
                    <option value="">-- Choose a Doctor --</option>
                    <option value="Dr. John Doe">Dr. John Doe</option>
                    <option value="Dr. Jane Smith">Dr. Jane Smith</option>
                    <option value="Dr. Alex Kim">Dr. Alex Kim</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Pick a Date</label>
                  <input
                    type="date"
                    className="w-full border rounded px-3 py-2"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Select a date"
                    title="Pick a date for your appointment"
                  />
                </div>
                {/* Submit button inside the form */}
                <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="min-w-[180px] mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition"
              >
                <Check className="w-5 h-5" /> Submit
              </button>
              </div>
              </form>
            )}

            {/* Show selected values */}
            {(selectedService || date) && (
              <div className="mt-4 text-center">
                {selectedService && (
                  <p className="text-blue-700 font-semibold">
                    Selected Service: {selectedService}
                  </p>
                )}
                {date && (
                  <p className="text-green-700 font-semibold">
                    Date: {date}
                  </p>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
  <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
    <Calendar className="w-5 h-5 mr-2 text-green-600" /> Book a Diagnostic Service
  </h2>
  <form onSubmit={handleSubmit}>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">Select Diagnostic Service</label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={selectedDiagnostic}
          onChange={(e) => setSelectedDiagnostic(e.target.value)}
          required
        >
          <option value="">-- Choose a Diagnostic --</option>
          {diagnostics.map((diag, idx) => (
            <option key={idx} value={diag}>{diag}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">Pick a Date</label>
        <input
          type="date"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          placeholder="Select a date"
          title="Pick a date for your diagnostic appointment"
        />
      </div>
    </div>
    {(selectedDiagnostic || date) && (
      <div className="mt-4 text-center">
        {selectedDiagnostic && (
          <p className="text-green-700 font-semibold">
            Selected Diagnostic: {selectedDiagnostic}
          </p>
        )}
        {date && (
          <p className="text-blue-700 font-semibold">
            Date: {date}
          </p>
        )}
      </div>
    )}
    <div className="flex justify-center">
      <button
        type="submit"
        className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm min-w-[180px] px-5 py-2.5 flex items-center justify-center gap-2 mt-6"
      >
        <Check className="w-5 h-5" /> Submit
      </button>
    </div>
  </form>
</div>
        )}
      </div>
    </Layout>
  );
}