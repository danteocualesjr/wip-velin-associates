
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ClientCenter = () => {
  const resources = [
    {
      title: "Secure Client Portal",
      description: "Access your financial documents securely. Our client portal protects you with 14 layers of security.",
      buttonText: "Login to Portal"
    },
    {
      title: "Newsletter Subscription",
      description: "Stay informed with our latest newsletters covering tax updates, financial tips, and more.",
      buttonText: "Subscribe Now"
    },
    {
      title: "Financial Calculators",
      description: "Use our financial calculators to help plan for your future and make informed financial decisions.",
      buttonText: "Access Calculators"
    },
    {
      title: "Useful Internet Links",
      description: "Browse our curated collection of useful links to financial and tax-related resources.",
      buttonText: "View Links"
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
                Client <span className="gradient-text">Center</span>
              </h1>
              <p className="text-xl text-gray-600">
                Access various resources including newsletters, a secure client portal, financial calculators, and useful internet links.
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
                  <h2 className="text-3xl font-bold mb-6">Need Help Accessing Resources?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Our team is ready to assist you with accessing any resources or answering any questions you may have.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    Contact Support
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

export default ClientCenter;
