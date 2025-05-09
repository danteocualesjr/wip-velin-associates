
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const newsletters = [
    {
      month: "May 2025",
      topics: ["Mid-Year Tax Planning", "Retirement Account Updates", "Small Business Tax Credits"],
      link: "#may-2025"
    },
    {
      month: "April 2025",
      topics: ["Post-Tax Season Review", "Estate Planning Strategies", "Business Expense Tracking"],
      link: "#april-2025"
    },
    {
      month: "March 2025",
      topics: ["Last-Minute Tax Filing Tips", "IRA Contribution Deadlines", "Tax Law Changes"],
      link: "#march-2025"
    },
    {
      month: "February 2025",
      topics: ["Tax Document Organization", "Business Deduction Updates", "Retirement Planning Tips"],
      link: "#february-2025"
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
                Monthly <span className="gradient-text">Newsletter</span>
              </h1>
              <p className="text-xl text-gray-600">
                Stay informed with our monthly newsletters covering tax updates, financial tips, and more.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {newsletters.map((newsletter, index) => (
                <div key={index} className="glass border-transparent rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{newsletter.month}</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Featured Topics:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {newsletter.topics.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white">
                    <a href={newsletter.link}>Read Newsletter</a>
                  </Button>
                </div>
              ))}
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Join our mailing list to receive the latest updates, tax tips, and financial news directly in your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-white/70"
                    />
                    <Button className="bg-accounting-700 hover:bg-accounting-800 text-white">
                      Subscribe
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

export default Newsletter;
