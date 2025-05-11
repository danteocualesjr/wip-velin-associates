
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const financialServices = [
    {
      title: "Audits, Reviews, and Compilations",
      description: "Providing financial reporting on all three levels of assurance."
    },
    {
      title: "Bookkeeping/Write-Up",
      description: "Assisting with day-to-day bookkeeping tasks."
    },
    {
      title: "Cash Flow & Budgeting Analysis",
      description: "Forecasting and evaluating financial conditions."
    },
    {
      title: "Financial Forecasts & Projections",
      description: "Assisting in achieving financial goals through projections and modeling."
    },
    {
      title: "Financial Statements",
      description: "Preparing statements in accordance with professional standards."
    },
    {
      title: "Forensic Accounting",
      description: "Analyzing financial records for dispute resolutions and fraud investigations."
    }
  ];

  const specializedServices = [
    {
      title: "CPA for Creators",
      description: "Specialized accounting services for content creators."
    },
    {
      title: "CPA for Amazon Business",
      description: "Tax and accounting solutions for Amazon sellers."
    },
    {
      title: "CPA for YouTubers",
      description: "Financial management for YouTube content creators."
    },
    {
      title: "CPA for Tiktokers",
      description: "Tax strategies for TikTok influencers."
    },
    {
      title: "CPA for Shopify Store",
      description: "Accounting solutions for Shopify store owners."
    },
    {
      title: "CPA for Online eCommerce",
      description: "Financial services for online retailers."
    },
    {
      title: "CPA for Filmmakers and Film Industry",
      description: "Specialized accounting for film production and industry professionals."
    },
    {
      title: "CPA for Dentists and Dental Businesses",
      description: "Financial solutions for dental practices."
    }
  ];

  const additionalServices = [
    { title: "Tax Planning & Preparation" },
    { title: "IRS Representation" },
    { title: "Payroll Services" },
    { title: "Sales Tax Services" },
    { title: "Estate & Trust Tax Preparation" },
    { title: "Consulting Services" },
    { title: "Buying & Selling a Business" },
    { title: "Fraud Prevention & Detection" },
    { title: "Estate Planning" },
    { title: "Investment Review" },
    { title: "Pension & Profit Sharing Plans" },
    { title: "Accounting Software Selection & Implementation" },
    { title: "Business Succession Planning" },
    { title: "Computer Consulting" },
    { title: "Financial Planning" },
    { title: "Retirement Planning" },
    { title: "Management Advisory Services" },
    { title: "Business Consulting" },
    { title: "Business Entity Selection" }
  ];

  const industriesServed = [
    {
      title: "Real Estate",
      description: "Investors, agents, brokers, developers, and property managers."
    },
    {
      title: "Small Business",
      description: "Assisting with cash flow, growth planning, risk assessment, and bookkeeping."
    },
    {
      title: "Entertainment",
      description: "Actors, models, agents, directors, writers, and publishers."
    },
    {
      title: "Healthcare",
      description: "Providing account management and tax preparation for healthcare organizations."
    },
    {
      title: "Entrepreneurs & Influencers",
      description: "Maximizing deductions and reducing taxes for online entrepreneurs and influencers."
    },
    {
      title: "Education",
      description: "Tax preparation services for teachers and educational institutions."
    },
    {
      title: "Retail",
      description: "Serving retailers in various sectors, including apparel, footwear, furniture, and technology."
    },
    {
      title: "Technology",
      description: "Assisting developers of hardware, software, apps, media, and electronics."
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
                Velin & Associates, Inc. is a full-service accounting firm licensed in California, offering a broad range of services for business owners, executives, and independent professionals.
              </p>
              <p className="text-xl font-semibold mt-4">
                "We are affordable, experienced, and friendly."
              </p>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Financial Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {financialServices.map((service, index) => (
                  <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Specialized CPA Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {specializedServices.map((service, index) => (
                  <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Additional Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {additionalServices.map((service, index) => (
                  <div key={index} className="p-4">
                    <h3 className="text-lg font-bold">{service.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {industriesServed.map((industry, index) => (
                  <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Contact Us Today</h2>
                  <div className="text-xl text-gray-600 mb-8">
                    <p className="mb-2"><strong>Address:</strong> 8159 Santa Monica Blvd Ste 198/200, West Hollywood, CA 90046</p>
                    <p className="mb-2"><strong>Phone:</strong> (323) 902-1000</p>
                  </div>
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

export default Services;
