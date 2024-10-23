import React, { useState } from 'react';
import '../css/Tailwind.module.css';


const Services = [
  { id: 1, name: 'Website Development' },
  { id: 2, name: 'Software Development' },
  { id: 3, name: 'E-commerce Solutions' },
  { id: 4, name: 'Digital Marketing' },
  { id: 5, name: 'Data Insights & Analytics' },
];

const TailwindForm= () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    services: [],
    otherDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, services: [...formData.services, value] });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter((service) => service !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div className="tailwindstyle-component container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Services</label>
          {Services.map((service) => (
            <div key={service.id} className="mt-1 flex items-center">
              <input
                type="checkbox"
                id={service.name}
                name="services"
                value={service.name}
                onChange={handleCheckboxChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor={service.name} className="ml-2 block text-sm text-gray-900">{service.name}</label>
            </div>
          ))}
          <div className="mt-1 flex items-center">
            <input
              type="checkbox"
              id="other"
              name="services"
              value="Other"
              onChange={handleCheckboxChange}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="other" className="ml-2 block text-sm text-gray-900">Other</label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="otherDetails" className="block text-sm font-medium text-gray-700">Provide more details</label>
          <textarea
            id="otherDetails"
            name="otherDetails"
            value={formData.otherDetails}
            onChange={handleChange}
            rows={3}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TailwindForm;
