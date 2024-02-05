import React, { useState } from 'react';
import supabase from '../api/Supabase';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from('contact_form').insert([{ name, email, message }]);

      if (error) {
        console.error('Error inserting data:', error.message);
        return;
      }

      console.log('Data inserted:', data);
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <footer id='footer' className="bg-gray-900 py-8 px-4 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div className="w-full lg:w-1/2 lg:pl-20  mt-6 lg:mt-0">
          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                className="flex items-center gap-2 text-white"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src='/images/facebook.svg' alt='twitter' className='w-5 h-6' />

                Facebook
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2 text-white"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d8a353"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a
                className="flex items-center  gap-2 text-white"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src='/images/linkedin.svg' alt='twitter' className='w-6 h-6' />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="flex items-center text-white gap-2"
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src='/images/twitter-x.svg' alt='twitter' className='w-7 h-6' /> 
                X
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 mt-4 lg:mt-0">
          <img src="/images/QR-code.jpeg" alt="QR Code" className="w-4/6" />
        </div>
      </div>
      <hr className="my-8 border-gray-400" />
      <div className="text-center">
        <p className="text-sm text-gray-100 mb-2"> 
          &copy; 2024 All Rights Reserved
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <a className="hover:underline text-white" href="#">
            Privacy Policy
          </a>
          <a className="hover:underline text-white" href="#">
            Terms and Conditions
          </a>
          <a className="hover:underline text-white" href="#">
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
