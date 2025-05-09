
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const taxServices = [
    {
      title: "Tax Preparation",
      description: "Comprehensive tax preparation services for individuals and businesses."
    },
    {
      title: "Tax Planning",
      description: "Strategic tax planning to minimize tax liability and maximize savings."
    },
    {
      title: "IRS Representation",
      description: "Professional representation before the IRS for audits, collections, and appeals."
    }
  ];

  const accountingServices = [
    {
      title: "Bookkeeping",
      description: "Accurate and timely bookkeeping services to keep your finances in order."
    },
    {
      title: "Financial Statements",
      description: "Preparation of clear and comprehensive financial statements for your business."
    },
    {
      title: "Payroll Services",
      description: "Complete payroll processing and management for businesses of all sizes."
    }
  ];

  const consultingServices = [
    {
      title: "Business Consulting",
      description: "Expert guidance to help your business thrive and achieve its goals."
    },
    {
      title: "Estate Planning",
      description: "Comprehensive estate planning to protect your assets and provide for your loved ones."
    },
    {
      title: "Retirement Planning",
      description: "Strategic retirement planning to ensure financial security in your golden years."
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
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-gray-600">
                We offer a wide array of services to meet the diverse needs of our clients.
              </p>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Tax Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {taxServices.map((service, index) => (
                  <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Accounting Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {accountingServices.map((service, index) => (
                  <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Consulting Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {consultingServices.map((service, index) => (
                  <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Contact us today to discuss how we can help you with your financial needs.
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

export default Services;
