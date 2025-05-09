
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const IndividualServices = () => {
  const services = [
    {
      title: "Retirement Planning",
      description: "Comprehensive strategies to help you prepare for a secure and comfortable retirement."
    },
    {
      title: "Tax Return Preparation",
      description: "Expert preparation of individual tax returns to ensure accuracy and maximize allowable deductions."
    },
    {
      title: "Personal Tax Planning",
      description: "Proactive strategies to minimize tax liability and optimize your financial situation."
    },
    {
      title: "IRS Representation",
      description: "Professional representation in dealings with the IRS, helping to navigate audits and resolve tax issues."
    },
    {
      title: "Trusts and Estate Planning",
      description: "Comprehensive planning to protect your assets and provide for your loved ones according to your wishes."
    },
    {
      title: "Family Partnerships",
      description: "Structured partnerships designed to manage family assets and facilitate effective wealth transfer."
    },
    {
      title: "Financial Advice",
      description: "Personalized guidance to help you make informed decisions about your financial future."
    },
    {
      title: "Gift Tax Planning",
      description: "Strategic planning to minimize tax implications when transferring assets to family members or others."
    },
    {
      title: "Real Estate Services",
      description: "Specialized tax and financial advice for real estate investments and transactions."
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
                Individual <span className="gradient-text">Financial Services</span>
              </h1>
              <p className="text-xl text-gray-600">
                Personalized financial solutions to help individuals achieve their financial goals and secure their future.
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
                  <h2 className="text-3xl font-bold mb-6">Take Control of Your Financial Future</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Let our experienced team help you navigate your personal financial journey with confidence.
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

export default IndividualServices;
