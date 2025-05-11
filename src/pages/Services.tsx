
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const individualServices = [
    {
      title: "Personal Financial Planning",
      description: "Comprehensive planning to help you meet your personal financial goals."
    },
    {
      title: "Estate Planning",
      description: "Strategic planning to ensure your assets are distributed according to your wishes."
    },
    {
      title: "Elder Care",
      description: "Financial services tailored to the needs of older adults and their families."
    }
  ];

  const businessServices = [
    {
      title: "Small Business Accounting",
      description: "Comprehensive accounting services to keep your business financially sound."
    },
    {
      title: "Payroll",
      description: "Complete payroll processing and tax filing services."
    },
    {
      title: "Part-Time CFO Services",
      description: "Expert financial leadership without the full-time expense."
    },
    {
      title: "Audits, Reviews, and Compilations",
      description: "Financial statement services to meet various reporting requirements."
    },
    {
      title: "Forensic Accounting",
      description: "Detailed financial investigations for legal and business purposes."
    },
    {
      title: "Cash Flow Management",
      description: "Strategies to improve and maintain positive cash flow for your business."
    },
    {
      title: "Bank Financing",
      description: "Assistance in securing the best financing options for your business."
    },
    {
      title: "Business Valuation",
      description: "Professional valuation services for various business needs."
    },
    {
      title: "Strategic Business Planning",
      description: "Development of comprehensive business plans to guide your company's growth."
    },
    {
      title: "Succession Planning",
      description: "Planning for the smooth transition of business ownership and management."
    },
    {
      title: "New Business Formation",
      description: "Guidance on entity selection and formation of new businesses."
    },
    {
      title: "Non-Profit Organizations",
      description: "Specialized services for non-profit organizations."
    },
    {
      title: "Internal Controls",
      description: "Development of systems to protect your business assets and ensure compliance."
    }
  ];

  const quickBooksServices = [
    {
      title: "QuickBooks Setup",
      description: "Professional setup of QuickBooks tailored to your business needs."
    },
    {
      title: "QuickBooks Training",
      description: "Personalized training to help you get the most from QuickBooks."
    },
    {
      title: "QuickAnswers",
      description: "Quick responses to your QuickBooks questions when you need them."
    },
    {
      title: "QuickTune-up",
      description: "Review and optimization of your QuickBooks setup for maximum efficiency."
    },
    {
      title: "QuickBooks Purchase",
      description: "Assistance with purchasing QuickBooks at a discounted rate."
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
                Columbia Accounting and Tax Services is a full-service accounting firm licensed in Maryland, offering a broad range of services for business owners, executives, and independent professionals.
              </p>
              <p className="text-xl font-semibold mt-4">
                "We are affordable, experienced, and friendly."
              </p>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">Services for Individuals</h2>
              <p className="text-gray-600 mb-6">
                Our services for individuals focus on protecting your personal assets and optimizing your financial health.
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
              <h2 className="text-3xl font-bold mb-8">Business Services</h2>
              <p className="text-gray-600 mb-6">
                Our business services are designed to enhance business efficiency, compliance, and profitability.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {businessServices.map((service, index) => (
                  <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    {service.title === "Non-Profit Organizations" && (
                      <Button variant="outline" className="mt-4">
                        <Link to="/nonprofit-organizations">Learn More</Link>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8">QuickBooks Services</h2>
              <p className="text-gray-600 mb-6">
                As certified QuickBooks ProAdvisors, we provide comprehensive setup and training for QuickBooks accounting software.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {quickBooksServices.map((service, index) => (
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
                    <p className="mb-2"><strong>Address:</strong> 5921 Norway Ct, Columbia, MD 21044</p>
                    <p className="mb-2"><strong>Phone:</strong> (443) 741-1970</p>
                    <p className="mb-2"><strong>Email:</strong> accounting@cataxservices.net</p>
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
