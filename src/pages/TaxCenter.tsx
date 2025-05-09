
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TaxCenter = () => {
  const resources = [
    {
      title: "Tax Forms & Publications",
      description: "Access official tax forms and publications for individuals and businesses."
    },
    {
      title: "Tax Calculators",
      description: "Use our tax calculators to estimate your taxes and plan accordingly."
    },
    {
      title: "Tax Deadlines",
      description: "Stay informed about important tax filing and payment deadlines."
    },
    {
      title: "Tax News & Updates",
      description: "Get the latest news and updates on tax laws and regulations."
    },
    {
      title: "Tax Planning Resources",
      description: "Access resources to help you plan your taxes and maximize your deductions."
    },
    {
      title: "Tax FAQ",
      description: "Find answers to frequently asked questions about taxes and tax preparation."
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
                Tax <span className="gradient-text">Center</span>
              </h1>
              <p className="text-xl text-gray-600">
                Access resources and tools to assist you with tax-related matters.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {resources.map((resource, index) => (
                <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                </div>
              ))}
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Need Tax Assistance?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Contact our team of tax professionals to discuss your specific tax needs and how we can assist you.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                      <Link to="/contact">Contact Our Tax Experts</Link>
                    </Button>
                    <Button variant="outline" className="border-accounting-700 text-accounting-700 hover:bg-accounting-50 px-8 py-6 text-lg">
                      <Link to="/personal-services">Learn About Tax Services</Link>
                    </Button>
                  </div>
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

export default TaxCenter;
