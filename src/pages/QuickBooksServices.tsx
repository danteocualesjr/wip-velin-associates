
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const QuickBooksServices = () => {
  const services = [
    {
      title: "QuickBooks Setup",
      description: "Professional setup and configuration of QuickBooks tailored to your specific business needs."
    },
    {
      title: "QuickBooks Training",
      description: "Personalized training sessions to help you make the most of your QuickBooks software."
    },
    {
      title: "QuickBooks Online",
      description: "Implementation and support for QuickBooks Online for easy access from anywhere."
    },
    {
      title: "QuickBooks Point of Sale",
      description: "Setup and integration of QuickBooks Point of Sale with your retail business."
    },
    {
      title: "QuickBooks for Industries",
      description: "Specialized QuickBooks solutions for specific industries including construction, retail, and professional services."
    },
    {
      title: "Ongoing QuickBooks Support",
      description: "Continuous assistance and troubleshooting for all your QuickBooks needs."
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                QuickBooks <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-gray-600">
                Comprehensive QuickBooks services, including setup, training, and ongoing support for businesses of all sizes.
              </p>
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden mb-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">QuickBooks ProAdvisor</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    "When it comes to QuickBooks, we can do anything and everything. Let's get started."
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Need QuickBooks Assistance?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Whether you're just getting started with QuickBooks or need help optimizing your current setup, our team is ready to assist.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Contact Us for QuickBooks Help</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default QuickBooksServices;
