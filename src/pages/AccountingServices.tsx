
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AccountingServices = () => {
  const services = [
    {
      title: "Bookkeeping Services",
      description: "Comprehensive bookkeeping services to keep your financial records accurate and up-to-date."
    },
    {
      title: "Accounting Technology",
      description: "Implementation of modern accounting software and systems to streamline your financial processes."
    },
    {
      title: "Payroll",
      description: "Complete payroll processing, tax filings, and compliance management for your business."
    },
    {
      title: "Payables and Receivables",
      description: "Management of accounts payable and receivable to ensure smooth cash flow for your business."
    },
    {
      title: "Business Consulting",
      description: "Strategic guidance to help your business make informed financial decisions and achieve growth objectives."
    },
    {
      title: "CPA Services",
      description: "Professional accounting services provided by certified public accountants with years of experience."
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
                Accounting <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-gray-600">
                Professional accounting services tailored to meet the needs of businesses and individuals in Maryland.
              </p>
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden mb-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Complete Accounting Solutions</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    "We provide end-to-end solutions for all of your accounting needs. We don't just enter some numbers into a spreadsheet and head out the door—we stick around and help you make use of your financial information."
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
                  <h2 className="text-3xl font-bold mb-6">A Focus on Relationships</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    "We want to get to know you and your business so we can make you feel more comfortable and better help you to succeed."
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Contact Us for Accounting Services</Link>
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

export default AccountingServices;
