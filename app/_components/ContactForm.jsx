'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log('Response from API:', data);

      if (data.success) {
        toast.success('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        toast.error('Failed to send message: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error('Something went wrong: ' + error.message);
    }
  };

  return (
    <div className=" bg-black text-white py-32" id='Contact'>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 ">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold">CONTACT US</h2>
        </div>

        <form onSubmit={handleSubmit} className="md:w-1/2 w-full space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="flex-1 p-3 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:border-green-400 transition-all"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="flex-1 p-3 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:border-green-400 transition-all"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 p-3 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:border-green-400 transition-all"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 p-3 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:border-green-400 transition-all"
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:border-green-400 transition-all"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-green-400 text-black font-semibold w-full py-3 rounded-full hover:bg-green-300 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
