
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const QuickBooksServices = () => {
  const services = [
    {
      title: "QuickBooks Experts in Bethesda",
      description: "Our team of certified QuickBooks experts provides comprehensive support for all your QuickBooks needs."
    },
    {
      title: "QuickBooks Training",
      description: "Personalized training sessions to help you and your team master QuickBooks for your specific business needs."
    },
    {
      title: "QuickBooks Setup",
      description: "Professional configuration of your QuickBooks system tailored to your business requirements and industry."
    },
    {
      title: "Data Migration",
      description: "Seamless transfer of your financial data from other systems or older versions to your current QuickBooks setup."
    },
    {
      title: "Custom Reporting",
      description: "Development of specialized reports to provide the financial insights your business needs."
    },
    {
      title: "Ongoing Support",
      description: "Continuous assistance and troubleshooting for your QuickBooks system and operations."
    }
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
                Expert QuickBooks support to help you maximize the benefits of this powerful financial software.
              </p>
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
                    Our certified QuickBooks experts are ready to help you optimize your financial management system.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    Schedule a Consultation
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
