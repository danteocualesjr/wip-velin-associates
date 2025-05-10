
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BusinessServices = () => {
  const services = [
    {
      title: "Accounting and Financial Statements",
      description: "Comprehensive bookkeeping and financial statement preparation services for your business."
    },
    {
      title: "IRS Audits",
      description: "Professional representation and guidance during IRS audit proceedings for businesses."
    },
    {
      title: "New Business Formation",
      description: "Assistance with entity selection and establishment of new business ventures."
    },
    {
      title: "QuickBooks Services",
      description: "Setup, training, and support for QuickBooks accounting software."
    },
    {
      title: "Business Consulting",
      description: "Expert advice to help your business reach its full potential and overcome challenges."
    },
    {
      title: "Succession Planning",
      description: "Strategic planning for seamless leadership transitions and business continuity."
    },
    {
      title: "Retirement Planning",
      description: "Business retirement plan setup and management for owners and employees."
    },
    {
      title: "Bookkeeping Services",
      description: "Regular maintenance of financial records and transaction processing."
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
              <p className="text-xl text-gray-600 mb-4">
                Comprehensive business services to help your company maximize efficiency and reduce tax liability.
              </p>
              <p className="text-lg text-gray-600">
                "We'll help you balance tax planning, tax compliance, and tax strategies to help you maximize efficiency and reduce your company's tax liability."
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
                  <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Contact us today to discuss how our business services can help your company succeed.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                    <Button variant="outline" className="border-accounting-700 text-accounting-700 hover:bg-accounting-50 px-8 py-6 text-lg">
                      <Link to="/tax-services">Tax Services</Link>
                    </Button>
                  </div>
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
