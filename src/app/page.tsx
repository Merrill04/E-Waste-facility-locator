"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer'; // Adjust this path according to your folder structure
import Card from '../components/Card.jsx';
import EwasteInfoComponent from '../components/EwasteInfoComponent';


export default function HomePage() {
  useEffect(() => {
    // Fade-in effect for the paragraph
    const paragraph = document.getElementById('info-paragraph');
    if (paragraph) {
      setTimeout(() => {
        paragraph.style.opacity = '1';
        paragraph.style.transition = 'opacity 2s';
      }, 1000); // Delay of 1 second before animation starts
    }
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div>
          <a href="#awareness">Awareness</a>
          <a href="#facilities">E-Facilities</a>
          <a href="/news">News</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <Link href="/signup">
          <button className="signup-button">Sign Up</button>
        </Link>
      </nav>

      <h2 className="text-4xl font-bold centered-paragraph">E-Waste Recycling and Facility Locator</h2>
      <p id="info-paragraph" className="text-1xl centered-paragraph" style={{ opacity: 0 }}>
        E-waste recycling and management are essential processes for handling the growing volume of electronic waste generated worldwide.
        As technology advances, electronic devices are rapidly discarded, resulting in significant environmental hazards due to harmful substances
        like lead, mercury, and cadmium in these products. Proper e-waste recycling involves collecting, sorting, and processing used electronics to
        recover valuable materials, such as metals and plastics, which can be reused in manufacturing. Effective management also reduces pollution,
        conserves natural resources, and minimizes the energy required for producing new materials.Educating the public about safe disposal practices
        is crucial for fostering a sustainable approach to managing electronic waste.
      </p>

      {/* Types of E-waste Section */}
      <section className="e-waste-types py-8">
        <h3 className="text-4xl font-bold text-center mb-8">Types of E-waste</h3>
        <div className="e-waste-container flex flex-wrap justify-center gap-8">
          <div className="e-waste-item group relative w-64 p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
            <img src="/assets/batteries.png" alt="Batteries" className="w-24 h-24 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Batteries</h4>
            <p className="text-gray-600 text-sm">Batteries contain toxic chemicals like lead and cadmium, which can seep into the soil and water, causing contamination.</p>
          </div>
          <div className="e-waste-item group relative w-64 p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
            <img src="/assets/monitor.jpg" alt="Monitors" className="w-24 h-24 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Monitors</h4>
            <p className="text-gray-600 text-sm">Old monitors contain mercury and other harmful elements that can be dangerous when not disposed of properly.</p>
          </div>
          <div className="e-waste-item group relative w-64 p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
            <img src="/assets/mobiles.png" alt="Mobile Phones" className="w-24 h-24 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Mobile Phones</h4>
            <p className="text-gray-600 text-sm">Mobile phones contain hazardous materials like lead and beryllium, which can lead to health issues if not recycled.</p>
          </div>
          <div className="e-waste-item group relative w-64 p-6 bg-gray-100 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
            <img src="/assets/printer.jpg" alt="Printers" className="w-24 h-24 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Printers</h4>
            <p className="text-gray-600 text-sm">Printers often contain hazardous inks and toners that can cause environmental damage when improperly discarded.</p>
          </div>
        </div>
      </section>

      <div className="flex">
        <div className="flex flex-col">
          <Card />
          <div className="flex flex-col p-12">
            <h2 className="text-3xl font-bold">Education</h2>
            <hr className="my-2 w-1/2" />
            <p>
              The E-Waste Facility Locator project is a web application that helps users locate nearby e-waste recycling facilities and assess the value of their recyclable electronic waste. Users can search for facilities in their area to responsibly dispose of e-waste like old electronics and appliances. The app also uses an AI/ML model to predict an approximate recycling price for specific types of e-waste, based on item details entered by the user. By promoting convenient recycling and providing estimated returns, this project encourages responsible disposal and recycling of electronic waste.
            </p>
          </div>
        </div>
        <EwasteInfoComponent />
      </div>

      <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold p-3">Discover Nearest E-Waste Facilities India</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15483577.547145078!2d83.96126292770049!3d18.656352441991164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sE-waste%20collection%20and%20recycling%20facility%20in%20India!5e0!3m2!1sen!2sin!4v1694891353768!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          className="w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* FAQs Section */}
      <section className="faq-section py-8">
        <h2 className="text-4xl font-bold text-center mb-8">FAQs Regarding Waste Management</h2>
        <div className="faq-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="faq-item group relative p-6 bg-white rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
            <h3 className="faq-question text-xl font-semibold mb-2">What is E-Waste?</h3>
            <p className="faq-answer text-gray-600 text-sm">E-waste refers to discarded electronic devices and appliances that can be recycled or disposed of safely.</p>
          </div>
          <div className="faq-item group relative p-6 bg-white rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
            <h3 className="faq-question text-xl font-semibold mb-2">Why is E-Waste recycling important?</h3>
            <p className="faq-answer text-gray-600 text-sm">Recycling E-waste helps recover valuable materials and prevents hazardous waste from harming the environment.</p>
          </div>
          <div className="faq-item group relative p-6 bg-white rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
            <h3 className="faq-question text-xl font-semibold mb-2">Where can I dispose of E-Waste?</h3>
            <p className="faq-answer text-gray-600 text-sm">You can find authorized facilities near you through our E-Waste Facility Locator.</p>
          </div>
          <div className="faq-item group relative p-6 bg-white rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
            <h3 className="faq-question text-xl font-semibold mb-2">Can all electronics be recycled?</h3>
            <p className="faq-answer text-gray-600 text-sm">Most electronics can be recycled, but some may require specialized handling.</p>
          </div>
          <div className="faq-item group relative p-6 bg-white rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
            <h3 className="faq-question text-xl font-semibold mb-2">How do I prepare my device for recycling?</h3>
            <p className="faq-answer text-gray-600 text-sm">Make sure to erase all personal data and remove any batteries before recycling your device.</p>
          </div>
          <div className="faq-item group relative p-6 bg-white rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-lg">
            <h3 className="faq-question text-xl font-semibold mb-2">Is E-Waste recycling free?</h3>
            <p className="faq-answer text-gray-600 text-sm">Many facilities offer free recycling, but some may charge a fee depending on the type of device.</p>
          </div>
          {/* Add more FAQ items here */}
        </div>
      </section>


      {/* Include the Footer Component */}
      <Footer />
    </div>
  );
}
