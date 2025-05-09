
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const InternationalServices = () => {
  const services = [
    {
      title: "Transfer Pricing",
      description: "Expert guidance on establishing compliant and advantageous transfer pricing policies for multinational operations."
    },
    {
      title: "International Taxation Strategies",
      description: "Specialized tax planning for individuals and businesses with international financial interests."
    },
    {
      title: "International Partnerships and Mergers",
      description: "Professional assistance with cross-border business combinations and partnership structures."
    },
    {
      title: "Tax Credit Planning",
      description: "Maximizing available tax credits for international business activities and investments."
    },
    {
      title: "Compliance",
      description: "Ensuring adherence to international tax laws and reporting requirements across multiple jurisdictions."
    },
    {
      title: "International Financial Planning",
      description: "Comprehensive financial strategies that account for the complexities of global finances."
    },
    {
      title: "International IRS Correspondence",
      description: "Expert handling of communications with the IRS regarding international tax matters."
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
                International <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-gray-600">
                Specialized financial and tax solutions for clients with global financial interests and operations.
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
                  <h2 className="text-3xl font-bold mb-6">Global Financial Solutions</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Navigate the complexities of international finance with our expert guidance and support.
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

export default InternationalServices;
