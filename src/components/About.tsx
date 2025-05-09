
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
                <p className="text-xl font-bold mb-2">Full</p>
                <p className="text-gray-700">Consulting services for small and mid-sized businesses</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Leger Accounting, Corp.</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Leger Accounting, Corp. is a growing company that provides full consulting services to small and mid-sized businesses.
            </p>
            <p className="text-gray-600 mb-6">
              We offer comprehensive financial and accounting solutions tailored to meet the unique needs of each client, ensuring their business success.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Business Services</h4>
                <p className="text-gray-600">Full accounting, payroll, and tax preparation for businesses</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Personal Services</h4>
                <p className="text-gray-600">Tax preparation and planning for individuals</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Translation Services</h4>
                <p className="text-gray-600">English to Spanish and Spanish to English translations</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Notary Services</h4>
                <p className="text-gray-600">Professional notary public services available</p>
              </div>
            </div>

            <Button className="bg-accounting-700 hover:bg-accounting-800 text-white">
              <Link to="/business-services">Learn More About Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
