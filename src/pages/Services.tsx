
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const taxServices = [
    {
      title: "Individual Tax Returns",
      description: "Professional tax preparation for individuals to maximize refunds and minimize liability."
    },
    {
      title: "Small Business Taxes",
      description: "Tax preparation for partnerships, S corporations, and C corporations."
    },
    {
      title: "Tax Planning",
      description: "Strategic tax planning to minimize future tax bills and maximize savings."
    }
  ];

  const businessServices = [
    {
      title: "Entity Selection",
      description: "Guidance on choosing between Sole Proprietorship, LLC, or S Corporation business structures."
    },
    {
      title: "Self-Employment Planning",
      description: "Help with quarterly estimated payments and tax obligations for the self-employed."
    },
    {
      title: "Non-Profit Organizations",
      description: "Tax preparation for tax-exempt organizations and homeowners associations."
    }
  ];

  const pricingInfo = [
    {
      title: "Transparent Pricing",
      description: "We post our tax preparation pricing estimates so you know what to expect."
    },
    {
      title: "Business Tax Forms",
      description: "Form 1065 (Partnership): $450+, Form 1120S (S Corporation): $550+, Form 1120 (C Corporation): $500+"
    },
    {
      title: "Non-Profit Forms",
      description: "Form 990 EZ: $350+, Form 990: $1,100+, Form 1120 H (Homeowners Association): $325+"
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
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-gray-600">
                We offer a wide array of tax preparation and planning services for individuals and small businesses.
              </p>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Tax Preparation and Planning</h2>
              <p className="text-gray-600 mb-6">
                Cut your future tax bills with careful tax planning. If you're frustrated by big box tax software, we can ease your way and alleviate confusion.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {taxServices.map((service, index) => (
                  <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Business Services</h2>
              <p className="text-gray-600 mb-6">
                Comprehensive services for small businesses, including tax preparation, entity selection, and self-employment planning.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {businessServices.map((service, index) => (
                  <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Pricing Information</h2>
              <p className="text-gray-600 mb-6">
                Unlike most tax services, we post our Tax Preparation Pricing estimates on our website, so you know what to expect.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {pricingInfo.map((info, index) => (
                  <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                    <p className="text-gray-600">{info.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Contact us today to discuss how we can help you with your tax preparation needs.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Contact Us</Link>
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

export default Services;
