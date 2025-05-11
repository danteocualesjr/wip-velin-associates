
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
                <p className="text-xl font-bold mb-2">Located in Los Angeles</p>
                <p className="text-gray-700">Serving businesses and individuals throughout the Los Angeles area with professional accounting services</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Gary Alan</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Gary Alan is a Los Angeles-based accountant known for his innovative approach and dedication to client service. He holds a Bachelor of Science degree in Business Administration & Accounting with honors from California State University Northridge (CSUN).
            </p>
            <p className="text-gray-600 mb-6">
              "Gary is dedicated to his work with unswerving diligence. Gary is a highly innovative accountant, whose creative solutions make tax filing go smoothly."
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Tax Services</h4>
                <p className="text-gray-600">Extensive tax returns and multiple tax schedules for various clients</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">QuickBooks Support</h4>
                <p className="text-gray-600">Using the #1 QuickBooks Online accounting software for accurate bookkeeping</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Business Services</h4>
                <p className="text-gray-600">Specialized services including S corporation creation for tax savings</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Client Focused</h4>
                <p className="text-gray-600">Available to clients in all locations for bookkeeping and tax returns</p>
              </div>
            </div>

            <Button className="bg-accounting-700 hover:bg-accounting-800 text-white">
              <Link to="/about">Learn More About Gary</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
