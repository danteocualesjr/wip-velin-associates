
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const taxServices = [
    {
      title: "Tax Preparation",
      description: "Comprehensive tax preparation services for individuals, trusts, and businesses."
    },
    {
      title: "Tax Planning",
      description: "Strategic tax planning to minimize tax liability and maximize savings."
    },
    {
      title: "IRS Representation",
      description: "Professional representation for tax matters with the IRS."
    }
  ];

  const estateServices = [
    {
      title: "Estate Planning",
      description: "Assistance with gift tax planning and charitable giving strategies."
    },
    {
      title: "Estate Administration",
      description: "Support for families dealing with estate administration and tax matters."
    },
    {
      title: "Estate Tax Preparation",
      description: "Specialized tax preparation for estates and trusts."
    }
  ];

  const consultingServices = [
    {
      title: "Business Entity Selection",
      description: "Guidance on selecting the right business structure for your needs."
    },
    {
      title: "Budgeting & Projections",
      description: "Financial planning and projections for your business."
    },
    {
      title: "Legal Support",
      description: "Support for attorneys and their clients with tax calculations and probate accountings."
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
                Our <span className="gradient-text">Practice Areas</span>
              </h1>
              <p className="text-xl text-gray-600">
                We offer a wide array of services to meet the diverse needs of our clients.
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
              <h2 className="text-3xl font-bold mb-8">Estate Planning and Administration</h2>
              <p className="text-gray-600 mb-6">
                We provide a full range of accounting services. We can help educate and navigate all the tax related matters associated with estate administration.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {estateServices.map((service, index) => (
                  <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Business Consulting</h2>
              <p className="text-gray-600 mb-6">
                Guidance on business entity selection, budgeting, projections, and support for attorneys and their clients with tax calculations and probate accountings.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {consultingServices.map((service, index) => (
                  <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
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
                    Contact us today to discuss how we can help you with your financial needs.
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
