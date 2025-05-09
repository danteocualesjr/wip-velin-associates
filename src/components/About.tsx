
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
                <p className="text-xl font-bold mb-2">Full-Service</p>
                <p className="text-gray-700">Comprehensive accounting services for individuals and businesses</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">CPA Associates</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Our firm is one of the leading firms in the area. By combining our expertise, experience, and the energy of our staff, each client receives close personal and professional attention.
            </p>
            <p className="text-gray-600 mb-6">
              Our high standards, service, and specialized staff spell the difference between our outstanding performance, and other firms.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Tax Services</h4>
                <p className="text-gray-600">Tax preparation, planning, and IRS representation</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Accounting Services</h4>
                <p className="text-gray-600">Bookkeeping, financial statements, and payroll services</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Consulting Services</h4>
                <p className="text-gray-600">Business consulting, estate and retirement planning</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Client Resources</h4>
                <p className="text-gray-600">Calculators, tax forms, newsletters, and useful links</p>
              </div>
            </div>

            <Button className="bg-accounting-700 hover:bg-accounting-800 text-white">
              <Link to="/services">Learn More About Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
