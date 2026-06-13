import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-400 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Portfolio Intro */}
        <div className="border-b border-gray-800 pb-10 mb-12">
          <h2 className="text-3xl font-bold text-white">
            Mohit Kumawat
          </h2>

        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Solutions
            </h3>

            <ul className="space-y-5">
              <li><a href="#" className="hover:text-white transition">Marketing</a></li>
              <li><a href="#" className="hover:text-white transition">Analytics</a></li>
              <li><a href="#" className="hover:text-white transition">Automation</a></li>
              <li><a href="#" className="hover:text-white transition">Commerce</a></li>
              <li><a href="#" className="hover:text-white transition">Insights</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Support
            </h3>

            <ul className="space-y-5">
              <li><a href="#" className="hover:text-white transition">Submit Ticket</a></li>
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Guides</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Company
            </h3>

            <ul className="space-y-5">
              <li><a href="#about" className="hover:text-white transition">About Me</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Legal
            </h3>

            <ul className="space-y-5">
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">License</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Mohit Kumawat. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="https://github.com/" className="hover:text-white transition">
              GitHub
            </a>

            <a href="https://linkedin.com/" className="hover:text-white transition">
              LinkedIn
            </a>

            <a href="mailto:youremail@example.com" className="hover:text-white transition">
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;