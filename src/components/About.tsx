
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50/50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[500px]">
              <div className="glass absolute top-8 -left-8 right-24 bottom-24 rounded-2xl"></div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden glass border-transparent shadow-xl">
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')] bg-cover bg-center"></div>
              </div>
              <div className="glass absolute right-4 -bottom-8 p-6 rounded-lg max-w-xs shadow-xl">
                <p className="text-xl font-bold mb-2">Located in Mount Dora</p>
                <p className="text-gray-700">Serving Lake County, Orange County, and Seminole County in Florida with professional accounting services</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Relate CPA</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Relate CPA is a leading Mount Dora, FL CPA accounting firm led by John Campion, Jr., offering personalized tax preparation and accounting services for individuals and businesses throughout the greater Orlando area.
            </p>
            <p className="text-gray-600 mb-6">
              "At Relate CPA, we separate ourselves from other CPA firms by working to create meaningful and lasting relationships with our clients."
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Tax Services</h4>
                <p className="text-gray-600">Complete personal and business tax preparation to minimize your tax liability</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">QuickBooks Support</h4>
                <p className="text-gray-600">Certified ProAdvisor providing setup, training, and ongoing support</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Accounting Services</h4>
                <p className="text-gray-600">Bookkeeping, payroll, and comprehensive business consulting</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Client Portal</h4>
                <p className="text-gray-600">Secure access to your financial information and documents</p>
              </div>
            </div>

            <Button className="bg-accounting-700 hover:bg-accounting-800 text-white">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
