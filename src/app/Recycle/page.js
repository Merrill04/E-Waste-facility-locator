"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RecycleableItems = [
  {
    name: 'Mobile Phones',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>
    ),
    description:
      'Improper disposal of phones can release harmful toxins like lead and cadmium into the environment.'
  },
  {
    name: 'Laptops',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line></svg>
    ),
    description:
      'Old laptops contain hazardous materials, including mercury and lithium-ion batteries.'
  },
  {
    name: 'Chargers',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="20" x2="20" y2="20"></line><line x1="9.53" y1="3" x2="15" y2="3"></line><line x1="12" y1="3" x2="12" y2="12"></line></svg>
    ),
    description:
      'Chargers contribute to plastic waste and may contain small amounts of lead.'
  },
  {
    name: 'Batteries',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><line x1="7" y1="22" x2="17" y2="22"></line></svg>
    ),
    description:
      'Batteries can leak toxic chemicals such as lead and acid, contaminating soil and water.'
  },
  {
    name: 'Computers',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path><polyline points="16 15 12 11 8 15"></polyline></svg>
    ),
    description:
      'Desktop computers and towers contain various hazardous materials that must be properly recycled.'
  },
  {
    name: 'Printers',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
    ),
    description:
      'Printers often have toner cartridges and other components that can leach toxins if not recycled.'
  },
  {
    name: 'TVs',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
    ),
    description:
      'Old TVs may contain lead, mercury, and other harmful substances that require specialized recycling.'
  },
  {
    name: 'Monitors',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    ),
    description:
      'Computer monitors often have glass, metals, and plastics that should be responsibly recycled.'
  }
];

const Recycle = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    itemCondition: '',
    purchaseDate: '',
    facilityName: '',
    expectedCredits: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <>
    <>
      <Navbar/>
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Section: E-Waste Items */}
      <section className="mb-8">
        <h1 className="text-4xl font-bold text-center py-2">Recyclable E-Waste Items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RecycleableItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-md text-center hover:scale-105 transition-transform duration-300 hover:shadow-lg"
            >
              <div className="text-4xl mb-2">
                {item.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Recycle Form */}
      <section>
        <h2 className="text-4xl font-bold text-center py-2">Recycle Your E-Waste</h2>
        <form 
          className="bg-white shadow-lg p-6 rounded-md max-w-2xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="itemName"
              className="block text-gray-700 font-medium mb-2"
            >
              Name and Type of Item
            </label>
            <input
              type="text"
              id="itemName"
              value={formData.itemName}
              onChange={handleInputChange}
              placeholder="e.g., Mobile Phone"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="itemCondition"
              className="block text-gray-700 font-medium mb-2"
            >
              Description of Item Condition
            </label>
            <textarea
              id="itemCondition"
              value={formData.itemCondition}
              onChange={handleInputChange}
              placeholder="Describe the condition of the item"
              rows={4}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="purchaseDate"
              className="block text-gray-700 font-medium mb-2"
            >
              Purchase Date
            </label>
            <input
              type="date"
              id="purchaseDate"
              value={formData.purchaseDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="facilityName"
              className="block text-gray-700 font-medium mb-2"
            >
              Nearby Recycling Facility
            </label>
            <input
              type="text"
              id="facilityName"
              value={formData.facilityName}
              onChange={handleInputChange}
              placeholder="Facility name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="expectedCredits"
              className="block text-gray-700 font-medium mb-2"
            >
              Expected Credits or Money
            </label>
            <input
              type="number"
              id="expectedCredits"
              value={formData.expectedCredits}
              onChange={handleInputChange}
              placeholder="Enter amount"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md font-bold hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Submit for Recycling
          </button>
        </form>
      </section>
    </div>
    <Footer/>
    </>
    </>
  );
};

export default Recycle;