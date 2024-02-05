import React, { useRef, useEffect, useState } from 'react';
import supabase from '../api/Supabase';
const ContactForm = ({ setShowContactForm }) => {
  const formRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowContactForm(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowContactForm]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!name || !email) {
        setError('Please provide both name and email');
        return;
      }

      setError(null);

      const { data, error } = await supabase.from('contact_form').insert([{ name, email }]);

      if (error) {
        setError('Error submitting form');
        console.error('Error inserting data:', error.message);
        return;
      }

      console.log('Data inserted:', data);
      setShowContactForm(false);
    } catch (error) {
      console.error('Error submitting form:', error.message);
      setError('Error submitting form');
    }
  };

  return (
    <div className="fixed z-20 inset-0 flex items-center justify-center">
      <div className="bg-black bg-opacity-50 absolute inset-0 z-20 cursor-pointer" onClick={() => setShowContactForm(false)} />
      <form ref={formRef} onSubmit={handleSubmit} className="z-30 bg-white rounded-lg p-8 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label className="block text-gray-800 mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-full lg:w-80 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-blue-950 transition duration-300 ease-in-out w-full"
          >
            Connect
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
