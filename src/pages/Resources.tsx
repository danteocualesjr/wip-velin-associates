
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Resources = () => {
  const resources = [
    {
      title: "Financial Calculators",
      description: "Easy-to-use calculators providing in-depth analysis for various financial scenarios including tax, retirement planning, personal finance, and more.",
      buttonText: "Access Calculators",
      link: "/resources#calculators"
    },
    {
      title: "Glossary of Accounting Terms",
      description: "A comprehensive glossary to assist clients in understanding accounting terminology.",
      buttonText: "View Glossary",
      link: "/resources#glossary"
    },
    {
      title: "News & Insights",
      description: "Stay informed with our latest articles on tax strategies, retirement planning, and more.",
      buttonText: "Read Articles",
      link: "/news-insights"
    },
    {
      title: "Client Portal",
      description: "Secure document sharing with ShareFile. Upload tax documents securely.",
      buttonText: "Access Portal",
      link: "/client-center"
    }
  ];

  const calculatorTypes = [
    "Tax Calculators",
    "Retirement Planning",
    "Personal Finance",
    "Savings & Investments",
    "Business Calculators",
    "Home Ownership",
    "Loan Calculators",
    "Vehicle Financing"
  ];

  return (
    <>
      <Navbar />
      <div className="pt-24">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Resources</span>
              </h1>
              <p className="text-xl text-gray-600">
                Valuable resources to assist you with your financial needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              {resources.map((resource, index) => (
                <Card key={index} className="glass border-transparent">
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="bg-accounting-700 hover:bg-accounting-800 text-white">
                      <Link to={resource.link}>{resource.buttonText}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div id="calculators" className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Financial Calculators</h2>
              <p className="text-gray-600 mb-6">
                Our easy-to-use financial calculators provide you with in-depth analysis for various financial scenarios.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {calculatorTypes.map((type, index) => (
                  <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                    <h3 className="text-lg font-bold">{type}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div id="glossary" className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Glossary of Accounting Terms</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Our comprehensive glossary helps you understand accounting terminology used in financial statements and tax documents.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/resources#glossary">View Glossary</Link>
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

export default Resources;
