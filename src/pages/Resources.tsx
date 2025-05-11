
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Resources = () => {
  const resources = [
    {
      title: "Publications",
      description: "Access our helpful printed newsletters with valuable information for individuals and businesses.",
      link: "/resources"
    },
    {
      title: "Useful Tips",
      description: "Browse our collection of tax, business, and financial tips to help you make informed decisions.",
      link: "/resources"
    },
    {
      title: "Articles",
      description: "Read our informative articles on tax, accounting, and management topics.",
      link: "/blog"
    },
    {
      title: "E-Newsletters",
      description: "Subscribe to our e-newsletters to stay updated on the latest financial news and tips.",
      link: "/newsletter"
    },
    {
      title: "Tax Guides",
      description: "Access comprehensive tax guides to help you navigate complex tax situations.",
      link: "/tax-tools"
    },
    {
      title: "Tax Planning Guide",
      description: "Request our complimentary tax planning guide booklet to optimize your tax strategy.",
      link: "/contact"
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
                Access our collection of helpful resources designed to assist you with tax, accounting, and financial matters.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {resources.map((resource, index) => (
                <Link key={index} to={resource.link}>
                  <Card className="glass border-transparent h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle>{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{resource.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Need Personalized Assistance?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Our team is ready to help you with personalized guidance and expertise tailored to your specific situation.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Contact Our Team</Link>
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
