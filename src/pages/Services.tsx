
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const individualServices = [
    {
      title: "Tax Preparation",
      description: "Professional tax preparation services to navigate complex and ever-changing tax laws."
    },
    {
      title: "Tax Planning",
      description: "Strategic tax planning to minimize your current and future tax burden."
    },
    {
      title: "Year-Round Support",
      description: "Access to year-round support for general questions, information needs, and basic tax projections."
    }
  ];

  const taxResolutionServices = [
    {
      title: "IRS Tax Notice Resolution",
      description: "Expert assistance with resolving IRS tax notices and communications."
    },
    {
      title: "State Tax Notice Resolution",
      description: "Help with resolving state tax notices and compliance issues."
    },
    {
      title: "Audit Assistance",
      description: "Professional representation during tax audits and tax court proceedings."
    }
  ];

  const specializedServices = [
    {
      title: "Form 990 Preparation",
      description: "Tax preparation services for not-for-profit organizations."
    },
    {
      title: "International Tax Services",
      description: "Specialized tax services for immigrants and resident aliens."
    },
    {
      title: "Retirement Planning",
      description: "Guidance on retirement planning strategies to optimize tax benefits."
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
                Bill Posner, CPA, PA is a family-owned firm based in Germantown, MD, with over 40 years of experience providing personalized accounting services.
              </p>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Individual Tax Preparation & Tax Planning</h2>
              <p className="text-gray-600 mb-6">
                "We recognize that tax laws are complex and constantly changing and that their impact can reach far into the future. We will work to minimize your current tax burden."
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {individualServices.map((service, index) => (
                  <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">IRS Tax Notice & Audit Resolution</h2>
              <p className="text-gray-600 mb-6">
                "Did you receive a tax notice? We can help!" Our team provides expert assistance with tax notices and audit resolution.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {taxResolutionServices.map((service, index) => (
                  <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Small Business Services</h2>
              <p className="text-gray-600 mb-6">
                We offer comprehensive accounting, bookkeeping, and tax preparation services for small to medium-sized businesses.
              </p>
              <div className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow mb-6">
                <h3 className="text-xl font-bold mb-3">Business Services</h3>
                <p className="text-gray-600">
                  Small Business Accounting, Bookkeeping & Tax Preparation services tailored to your business needs.
                </p>
                <p className="text-gray-600 mt-4 font-semibold">
                  Note: As of July 1, 2023, we are not accepting new business clients.
                </p>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Specialized Services</h2>
              <p className="text-gray-600 mb-6">
                We provide a range of specialized services to meet diverse client needs.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {specializedServices.map((service, index) => (
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
                  <h2 className="text-3xl font-bold mb-6">Contact Us Today</h2>
                  <div className="text-xl text-gray-600 mb-8">
                    <p className="mb-2"><strong>Address:</strong> 13301 Woodruff Ct, Germantown, MD 20874</p>
                    <p className="mb-2"><strong>Phone:</strong> 301-528-2701</p>
                    <p className="mb-2"><strong>Email:</strong> info@billposnercpa.com</p>
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
