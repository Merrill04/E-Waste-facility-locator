"use client";

import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer'; // Adjust this path according to your folder structure

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
    <h2 className="title">E-Waste Recycling and Facility Locator</h2>
      <p id="info-paragraph" className="centered-paragraph" style={{ opacity: 0 }}>
        Recycling electronic waste is essential to reduce environmental impact and recover valuable materials.
        E-waste can be harmful when not disposed of properly, leading to pollution and health risks. By recycling,
        we can contribute to a more sustainable future, conserve resources, and support the circular economy.
      </p>

    {/* Types of E-waste Section */}
    <section className="e-waste-types">
      <h3 className="section-title">Types of E-waste</h3>
      <div className="e-waste-container">
        <div className="e-waste-item">
          <img src="/assets/batteries.png" alt="Type 1" className="e-waste-image" />
          <h4 className="item-title">Batteries</h4>
          <p className="item-description">
            Batteries contain toxic chemicals like lead and cadmium, which can seep into the soil and water, causing contamination.
          </p>
        </div>
        <div className="e-waste-item">
          <img src="/assets/monitor.jpg" alt="Type 2" className="e-waste-image" />
          <h4 className="item-title">Monitors</h4>
          <p className="item-description">
            Old monitors contain mercury and other harmful elements that can be dangerous when not disposed of properly.
          </p>
        </div>
        <div className="e-waste-item">
          <img src="/assets/mobiles.png" alt="Type 3" className="e-waste-image" />
          <h4 className="item-title">Mobile Phones</h4>
          <p className="item-description">
            Mobile phones contain hazardous materials like lead and beryllium, which can lead to health issues if not recycled.
          </p>
        </div>
        <div className="e-waste-item">
          <img src="/assets/printer.jpg" alt="Type 4" className="e-waste-image" />
          <h4 className="item-title">Printers</h4>
          <p className="item-description">
            Printers often contain hazardous inks and toners that can cause environmental damage when improperly discarded.
          </p>
        </div>
      </div>
    </section>


    <div className="container">
      <h1 className="header-text">Discover Nearest E-Waste Facilities India</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15483577.547145078!2d83.96126292770049!3d18.656352441991164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sE-waste%20collection%20and%20recycling%20facility%20in%20India!5e0!3m2!1sen!2sin!4v1694891353768!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        className="map"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <section className="faq-section">
      <h2 className="faq-heading">FAQs Regarding Waste Management</h2>
      <div className="faq-container">
        <div className="faq-item">
          <h3 className="faq-question">What is E-Waste?</h3>
          <p className="faq-answer">E-waste refers to discarded electronic devices and appliances that can be recycled or disposed of safely.</p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">Why is E-Waste recycling important?</h3>
          <p className="faq-answer">Recycling E-waste helps recover valuable materials and prevents hazardous waste from harming the environment.</p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">Where can I dispose of E-Waste?</h3>
          <p className="faq-answer">You can find authorized facilities near you through our E-Waste Facility Locator.</p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">Can all electronics be recycled?</h3>
          <p className="faq-answer">Most electronics can be recycled, but some may require specialized handling.</p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">How do I prepare my device for recycling?</h3>
          <p className="faq-answer">Make sure to erase all personal data and remove any batteries before recycling your device.</p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">Is E-Waste recycling free?</h3>
          <p className="faq-answer">Many facilities offer free recycling, but some may charge a fee depending on the type of device.</p>
        </div>
      </div>
    </section>

    {/* Include the Footer Component */}
    <Footer />
  </div>
);
}
