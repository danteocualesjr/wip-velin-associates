
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">James Magno CPA LLC</span>
              </h1>
              <p className="text-xl text-gray-600">
                Learn about our firm's history, mission, and the team behind James Magno CPA LLC.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <div className="relative w-full h-[400px]">
                  <div className="glass absolute top-8 -left-8 right-24 bottom-24 rounded-2xl"></div>
                  <div className="absolute inset-0 rounded-2xl overflow-hidden glass border-transparent shadow-xl">
                    <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')] bg-cover bg-center"></div>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-up">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  James Magno CPA LLC is a full-service accounting firm based in Rockville, Maryland, specializing in estate-related tax preparation and administration.
                </p>
                <p className="text-gray-600 mb-4">
                  James Magno launched his firm in November 2014 after nearly twenty years with Gold, Leins and Adoff LLP. He has over 30 years of experience in public accounting.
                </p>
                <p className="text-gray-600 mb-6">
                  We take pride in our affordable, experienced, and friendly approach to serving our clients' accounting and financial needs.
                </p>
                
                <div className="glass p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold mb-3">Credentials</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• BS in Accounting from the University of Maryland</li>
                    <li>• Master's of Taxation from the University of Baltimore</li>
                    <li>• Certificates of completion for Trust Tax I and Trust Tax II from Cannon Trust School</li>
                    <li>• Member of AICPA, MACPA, MSATP, APCPA, and NCACPA</li>
                  </ul>
                </div>

                <Button className="bg-accounting-700 hover:bg-accounting-800 text-white">
                  <Link to="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>

            <div className="glass border-transparent rounded-2xl p-12 relative overflow-hidden my-16">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accounting-600/5 to-accounting-100/20 z-0"></div>
              <div className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Our Commitment to Security</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    "Your data is safe with us. Our client portal protects you with secure document sharing through ShareFile."
                  </p>
                  <Button className="bg-accounting-700 hover:bg-accounting-800 text-white px-8 py-6 text-lg">
                    <Link to="/client-center">Visit Our Client Portal</Link>
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

export default About;
