
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
                About <span className="gradient-text">Columbia Accounting and Tax Services</span>
              </h1>
              <p className="text-xl text-gray-600">
                Learn about our firm's philosophy, mission, and why our clients trust us.
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
                  Columbia Accounting and Tax Services is led by John Campion, Jr., a seasoned CPA dedicated to providing personalized accounting services. The firm's philosophy centers on building strong client relationships to deliver tailored financial solutions.
                </p>
                <p className="text-gray-600 mb-4">
                  We are committed to maintaining the highest standards of integrity and professionalism in our relationship with clients. We strive to provide quality accounting services with personal attention to each client's unique needs.
                </p>
                <p className="text-gray-600 mb-6">
                  At Columbia Accounting and Tax Services, we separate ourselves from other CPA firms by working to create meaningful and lasting relationships with our clients.
                </p>
                
                <div className="glass p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-gray-600">
                    "We want to get to know you and your business so we can make you feel more comfortable and better help you to succeed."
                  </p>
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
                  <h2 className="text-3xl font-bold mb-6">Complete Accounting Solutions</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    "We provide end-to-end solutions for all of your accounting and tax needs. We don't just enter some numbers into a spreadsheet and head out the door—we stick around and help you make use of your financial information."
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
