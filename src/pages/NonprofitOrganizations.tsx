
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NonprofitOrganizations = () => {
  const services = [
    {
      title: "Form 990 Preparation",
      description: "Preparation and filing of Form 990 and related schedules to maintain tax-exempt status."
    },
    {
      title: "Accounting Systems",
      description: "Design and maintenance of accounting systems tailored for non-profit organizations."
    },
    {
      title: "Payroll Services",
      description: "Payroll preparation and tax deposits for your non-profit organization."
    },
    {
      title: "Training Services",
      description: "Specialized training for accounting personnel and board members."
    },
    {
      title: "501(c)(3) Application Assistance",
      description: "Professional assistance with 501(c)(3) application for tax-exempt status."
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
                Non-Profit <span className="gradient-text">Organizations</span>
              </h1>
              <p className="text-xl text-gray-600">
                We help you setup and maintain your non-profit organization's tax-exempt status by handling all the IRS reporting for you.
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
                  <h2 className="text-3xl font-bold mb-6">Need Help With Your Non-Profit Organization?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Contact us today to learn how we can assist with your non-profit organization's financial management and IRS reporting.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Contact Us Today</Link>
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

export default NonprofitOrganizations;
