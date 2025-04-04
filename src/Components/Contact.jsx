import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-10"><span><EmailIcon sx={{ fontSize: 48 }} className="pb-2 pr-3"></EmailIcon></span>Contact <span className="text-orange-700">Me</span></h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-72">
        {/* Contact Info */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <p className="mb-6 text-gray-600">
            Feel free to reach out to me via email or connect with me on LinkedIn.
          </p>
          <a
            href="mailto:dipakghuge65@gmail.com"
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-blue-600 transition"
          >
            <FaEnvelope className="mr-2" />
            dipakghuge65@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/dipakghuge"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-blue-800 transition mt-4"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn Profile
          </a>

        </div>
      </div>
      
    </section>
  );
};

export default Contact;
