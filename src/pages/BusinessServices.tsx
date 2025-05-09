
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BusinessServices = () => {
  const services = [
    {
      title: "Payroll Services",
      description: "Complete payroll processing, tax filing, and direct deposit services for businesses of all sizes."
    },
    {
      title: "Financial Mentoring",
      description: "Professional guidance to help business owners make informed financial decisions and achieve their goals."
    },
    {
      title: "Structured Partnerships",
      description: "Expert assistance in creating and maintaining business partnerships that protect all parties involved."
    },
    {
      title: "IRS Representation",
      description: "Professional representation in dealings with the IRS, helping to navigate audits and resolve tax issues."
    },
    {
      title: "Financial Reporting",
      description: "Comprehensive financial reporting services to help track business performance and make informed decisions."
    },
    {
      title: "Business Formation",
      description: "Guidance through the process of establishing a new business, including entity selection and registration."
    },
    {
      title: "Business Valuations",
      description: "Professional assessment of business worth for sale, acquisition, or partnership dissolution purposes."
    },
    {
      title: "Business Dissolution",
      description: "Expert assistance in navigating the complex process of closing or dissolving a business."
    },
    {
      title: "Alternate and Traditional Financing",
      description: "Help with securing funding through both conventional and alternative financing methods."
    },
    {
      title: "Small Business Services",
      description: "Specialized accounting services tailored to the unique needs of small businesses."
    },
    {
      title: "Litigation Support",
      description: "Professional assistance in financial matters related to business litigation."
    },
    {
      title: "Forensic Accounting",
      description: "Investigative accounting services to identify financial discrepancies and provide expert testimony."
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
                Comprehensive financial and accounting solutions to help your business thrive in today's competitive landscape.
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
                  <h2 className="text-3xl font-bold mb-6">Need Specialized Business Services?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Contact us today to discuss how we can help your business achieve its financial goals.
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

export default BusinessServices;
