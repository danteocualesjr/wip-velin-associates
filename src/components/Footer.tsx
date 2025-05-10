
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-accounting-700/30 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute left-1/4 top-0 w-1/4 h-1/4 bg-accounting-500/30 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Maryland Tax Service, Inc.</h3>
            <p className="text-gray-400 mb-6">
              A full-service accounting firm based in Owings Mills, Maryland, providing professional, personalized services and guidance in a wide range of financial and business needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-accounting-700/20 hover:bg-accounting-700/40 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5 text-accounting-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-accounting-700/20 hover:bg-accounting-700/40 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5 text-accounting-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-accounting-700/20 hover:bg-accounting-700/40 rounded-full flex items-center justify-center transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5 text-accounting-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="/tax-tools" className="text-gray-400 hover:text-white transition-colors">Tax Tools</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">News</Link></li>
              <li><Link to="/financial-guides" className="text-gray-400 hover:text-white transition-colors">Financial Guides</Link></li>
              <li><Link to="/glossary" className="text-gray-400 hover:text-white transition-colors">Glossary</Link></li>
              <li><Link to="/links" className="text-gray-400 hover:text-white transition-colors">Useful Links</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">4 Park Center Court, Suite 203</li>
              <li className="text-gray-400">Owings Mills, MD 21117</li>
              <li className="text-gray-400">Phone: (410) 654-9424</li>
              <li className="text-gray-400">Toll Free: (800) 892-9631</li>
              <li className="text-gray-400">Fax: (410) 654-1277</li>
              <li className="text-gray-400">Email: travis@mdtaxservice.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 Maryland Tax Service, Inc. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
