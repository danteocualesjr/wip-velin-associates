
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BusinessServices = () => {
  const services = [
    {
      title: "Business Start-up",
      description: "Assistance with obtaining all necessary state accounts to establish your business."
    },
    {
      title: "Full Accounting Services",
      description: "Write-up process, bank reconciliation, financial statement analysis, depreciation, and inventory management."
    },
    {
      title: "Payroll Services",
      description: "Complete payroll processing and management for your business."
    },
    {
      title: "Business Income Tax Preparation",
      description: "Comprehensive tax preparation including multi-state income taxes."
    },
    {
      title: "Minority Application Package",
      description: "Specialized assistance for minority business applications and certifications."
    },
    {
      title: "IFTA Quarterly Reports Preparation",
      description: "Professional preparation of International Fuel Tax Agreement (IFTA) quarterly reports."
    },
    {
      title: "DOT Application",
      description: "Assistance with Department of Transportation (DOT) application processes."
    },
    {
      title: "Motor Carrier (MC) Application",
      description: "Support with Motor Carrier (MC) application submissions and requirements."
    },
    {
      title: "Contracts",
      description: "Development and review of business contracts and agreements."
    },
    {
      title: "Property Taxes",
      description: "Management and processing of property tax requirements for businesses."
    },
    {
      title: "Business Dissolution",
      description: "Professional guidance through the process of closing or dissolving a business."
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
                Business <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-gray-600">
                Comprehensive business services tailored to help your business thrive in today's competitive landscape.
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
                  <h2 className="text-3xl font-bold mb-6">Need Business Accounting Services?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Contact us today to discuss how we can help your business achieve its financial goals.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Contact Us</Link>
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

export default BusinessServices;
