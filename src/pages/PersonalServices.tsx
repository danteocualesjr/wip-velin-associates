
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PersonalServices = () => {
  const services = [
    {
      title: "Preparation of Personal Income Taxes",
      description: "Complete preparation of federal and state personal income tax returns."
    },
    {
      title: "Tax Planning",
      description: "Strategic planning to minimize tax liability and optimize your financial situation."
    },
    {
      title: "Personal Budget Planning",
      description: "Comprehensive assistance with creating and managing personal budgets for financial success."
    },
    {
      title: "Individual Taxpayer Identification Number (ITIN) Application",
      description: "Professional assistance with applying for an ITIN, also known as a Tax ID Number."
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
                Personal <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-gray-600">
                Personalized financial solutions to help individuals achieve their financial goals and secure their future.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
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
                  <h2 className="text-3xl font-bold mb-6">Take Control of Your Financial Future</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Let our experienced team help you navigate your personal financial journey with confidence.
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

export default PersonalServices;
