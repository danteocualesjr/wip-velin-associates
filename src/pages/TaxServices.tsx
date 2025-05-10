
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TaxServices = () => {
  const services = [
    {
      title: "Personal Taxes",
      description: "Expert preparation of individual tax returns to ensure compliance and maximize deductions."
    },
    {
      title: "Business Taxes",
      description: "Comprehensive business tax preparation for corporations, partnerships, and LLCs."
    },
    {
      title: "1099 Subcontractor Taxes",
      description: "Specialized tax preparation for independent contractors and self-employed professionals."
    },
    {
      title: "IRS Tax Resolution",
      description: "Professional assistance with resolving tax issues and disputes with the IRS."
    },
    {
      title: "Tax Audit Support",
      description: "Expert representation and support during IRS audits to minimize stress and consequences."
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
                Tax <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-gray-600">
                Complete personal and business tax preparation services in Florida; we make tax returns easy for you.
              </p>
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden mb-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Expert Tax Preparation</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    "We provide end-to-end solutions for all of your tax needs, ensuring compliance while identifying opportunities to minimize your tax liability."
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
                  <h2 className="text-3xl font-bold mb-6">Ready for Tax Season?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Don't let tax preparation stress you out. Contact our team today to ensure your taxes are filed accurately and efficiently.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Schedule a Tax Consultation</Link>
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

export default TaxServices;
