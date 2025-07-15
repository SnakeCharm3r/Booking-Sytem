import React from 'react';

export default function Hero() {
  return (
    <section className="bg-white text-center py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
          Book a Doctor Anytime, Anywhere
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get 24/7 access to trusted medical professionals from the comfort of your home.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition">
            Book Now
          </button>
          <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
