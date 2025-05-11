
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ClientCenter = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Client <span className="gradient-text">Portal</span>
              </h1>
              <p className="text-xl text-gray-600">
                Secure document sharing with our client portal. Upload tax documents securely.
              </p>
              <div className="mt-6 text-amber-600 font-medium">
                <p>
                  Please contact Gary directly if you run into any issues. 
                  Please do not upload HEIC formatted documents (iPhone photos). Thank you!
                </p>
              </div>
            </div>

            <div className="glass border-transparent rounded-2xl p-12 max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Secure Client Portal</h2>
                <p className="text-gray-600">
                  Our secure client portal allows you to safely share sensitive financial documents with Gary.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg w-full md:w-2/3">
                    <a href="#" target="_blank" rel="noreferrer">Sign In to Client Portal</a>
                  </Button>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-2 text-blue-800">Portal Security Features</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Secure 256-bit encryption for all files</li>
                    <li>SSL encrypted communications</li>
                    <li>Multiple layers of data security</li>
                    <li>Easy upload and download of documents</li>
                    <li>Mobile-friendly access from any device</li>
                    <li>Notification when documents have been uploaded</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Need Assistance?</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    If you need help accessing or using our client portal, Gary is ready to assist you.
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/contact">Contact Gary</Link>
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
