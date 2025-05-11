
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Specialties = () => {
  const specialties = [
    {
      title: "S Corporation Creation",
      description: "I can assist you to create an S corporation for tax savings. S corporations can help self-employed individuals save on self-employment taxes by allowing them to pay themselves a reasonable salary and take the rest of their profits as distributions.",
      icon: "💼"
    },
    {
      title: "Commissions Tracking",
      description: "Expert tracking of various types of commission structures, ensuring accurate reporting for tax purposes and helping you understand your true earnings.",
      icon: "📊"
    },
    {
      title: "International Tax Returns",
      description: "Tax returns for all types of income earned from all countries with proper foreign tax credit calculations to avoid double taxation and ensure compliance with international tax laws.",
      icon: "🌎"
    },
    {
      title: "Real Estate Investors",
      description: "Specialized accounting services for real estate investors, including tracking of rental property income and expenses, depreciation calculations, and tax strategies specific to real estate.",
      icon: "🏠"
    },
    {
      title: "Independent Contractors",
      description: "Comprehensive tax and accounting support for freelancers and independent contractors, helping you maximize deductions and minimize tax liability.",
      icon: "👨‍💼"
    },
    {
      title: "Small Business Consulting",
      description: "Strategic business advice and financial planning to help small businesses optimize operations, improve profitability, and achieve long-term success.",
      icon: "📈"
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
                Gary's <span className="gradient-text">Specialties</span>
              </h1>
              <p className="text-xl text-gray-600">
                Areas of expertise where Gary offers specialized knowledge and services to help clients achieve their financial goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {specialties.map((specialty, index) => (
                <div key={index} className="glass border-transparent rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{specialty.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{specialty.title}</h3>
                  <p className="text-gray-700">{specialty.description}</p>
                </div>
              ))}
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Need Specialized Financial Services?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Contact Gary to discuss your specific needs and how his specialized expertise can benefit your financial situation.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Schedule a Consultation</Link>
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

export default Specialties;
