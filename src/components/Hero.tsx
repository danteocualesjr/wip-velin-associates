
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-accounting-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute left-1/4 bottom-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-accounting-50 rounded-full opacity-70 blur-3xl"></div>
      </div>

      <div className="container-custom grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in">
        <div className="order-2 md:order-1 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="gradient-text">Gary Alan Accounting</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
            A Los Angeles-based accountant known for innovative approach and dedication to client service, providing comprehensive services for individuals and businesses throughout the Los Angeles area.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
              <Link to="/services">Our Services</Link>
            </Button>
            <Button variant="outline" className="border-accounting-700 text-accounting-700 hover:bg-accounting-50 px-8 py-6 text-lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="glass px-4 py-3 rounded-lg">
              <p className="text-sm text-gray-600">Expert</p>
              <p className="text-2xl font-bold">Tax</p>
              <p className="text-sm text-gray-600">Preparation</p>
            </div>
            <div className="glass px-4 py-3 rounded-lg">
              <p className="text-sm text-gray-600">QuickBooks</p>
              <p className="text-2xl font-bold">Online</p>
              <p className="text-sm text-gray-600">Services</p>
            </div>
            <div className="glass px-4 py-3 rounded-lg">
              <p className="text-sm text-gray-600">Complete</p>
              <p className="text-2xl font-bold">Accounting</p>
              <p className="text-sm text-gray-600">Solutions</p>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 relative">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <div className="glass absolute inset-0 rounded-2xl overflow-hidden transform rotate-3">
              <div className="absolute inset-0 bg-gradient-to-br from-accounting-700/20 to-accounting-500/20"></div>
            </div>
            <div className="glass absolute inset-0 rounded-2xl overflow-hidden transform -rotate-3">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accounting-300/20"></div>
            </div>
            <div className="glass absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1011&q=80')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-accounting-700/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
