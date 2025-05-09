
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OtherServices = () => {
  const services = [
    {
      title: "Translations",
      description: "Professional translation services in writing and in person (English to Spanish and Spanish to English)."
    },
    {
      title: "Notary Public Services",
      description: "Official notary services for all your document authentication needs."
    },
    {
      title: "Authorization Letters",
      description: "Professional drafting of authorization letters for various purposes."
    },
    {
      title: "Bill of Sales",
      description: "Assistance with preparing and processing bills of sale for transactions."
    },
    {
      title: "Assisting to Fill-Out Applications",
      description: "Professional help with completing various applications and forms."
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
                Other <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-gray-600">
                Additional professional services to support your business and personal needs.
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
                  <h2 className="text-3xl font-bold mb-6">Need Additional Services?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Contact us today to learn more about our full range of professional services.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Get in Touch</Link>
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

export default OtherServices;
