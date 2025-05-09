
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Resources = () => {
  const resources = [
    {
      title: "Financial Calculators",
      description: "Use our financial calculators to help plan for your future and make informed financial decisions.",
      buttonText: "Access Calculators"
    },
    {
      title: "Tax Forms and Publications",
      description: "Download the latest tax forms and access official IRS publications to help with your tax preparation.",
      buttonText: "View Tax Forms"
    },
    {
      title: "Newsletters",
      description: "Stay informed with our latest newsletters covering tax updates, financial tips, and more.",
      buttonText: "Read Newsletters"
    },
    {
      title: "Useful Internet Links",
      description: "Browse our curated collection of useful links to financial and tax-related resources.",
      buttonText: "Visit Links"
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
                <span className="gradient-text">Resources</span>
              </h1>
              <p className="text-xl text-gray-600">
                Valuable resources to assist you with your financial needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {resources.map((resource, index) => (
                <Card key={index} className="glass border-transparent">
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="bg-accounting-700 hover:bg-accounting-800 text-white">
                      {resource.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Need Help With Your Finances?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Our team of experts is ready to assist you with any financial questions or concerns.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    Contact Us Today
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
