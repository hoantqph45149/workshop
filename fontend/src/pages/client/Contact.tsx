import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Banner from "../../components/Banner";

const ContactPage: React.FC = () => {
  // Define form state using TypeScript types
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Type for handling input change event
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Type for form submission event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <>
      <Banner />
      <div className="bg-gray-100">
        {/* Top section: Address, Contact Details, Social Networks */}
        <div className="bg-white py-6">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center space-x-6">
            {/* Address */}
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FaMapMarkerAlt className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold">ADDRESS</h3>
              <p>
                60/850 Đường Láng, Láng Thượng,
                <br />
                Đống Đa, Hà Nội
              </p>
            </div>

            {/* Contact Details */}
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FaEnvelope className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold">CONTACT DETAILS</h3>
              <p>info@furniro.com</p>
              <p className="font-bold text-xl">02056278686</p>
            </div>

            {/* Social Networks */}
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <FaPhoneAlt className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold">SOCIAL NETWORKS</h3>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="#">
                  <FaFacebook className="h-6 w-6 text-blue-600" />
                </a>
                <a href="#">
                  <FaInstagram className="h-6 w-6 text-pink-500" />
                </a>
                <a href="#">
                  <FaTiktok className="h-6 w-6 text-black" />
                </a>
                <a href="#">
                  <FaTwitter className="h-6 w-6 text-blue-400" />
                </a>
                <a href="#">
                  <FaYoutube className="h-6 w-6 text-red-600" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle section: Image and Contact Form */}
        <div className="flex flex-col lg:flex-row max-w-full mx-auto bg-white">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="https:/picsum.photos/1500/800/?random=1"
              alt="House"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Contact Form Section */}
          <div className="lg:w-1/2 p-8 bg-gray-50">
            <h2 className="text-3xl text-center font-bold mb-6">
              CONNECT WITH US NOW
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-md md:col-span-2"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded-md md:col-span-2"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="p-3 border border-gray-300 rounded-md md:col-span-2"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-md mt-4 md:col-span-2"
              >
                Send Information
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
