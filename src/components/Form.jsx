import React from "react";

const Form = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Prevent empty submission
    if (!name || !email || !message) {
      alert("All fields are required!");
      return;
    }

    // Mailto URL format for sending email
    const mailtoLink = `mailto:officialsubham1999@gmail.com?subject=Message from ${name}&body=${message}%0A%0AContact Email: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 bg-gray-900 p-4 rounded-lg shadow-lg "
    >
      {/* Name Input */}
      <div>
        <label className="block text-white text-lg font-semibold">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* Email Input */}
      <div>
        <label className="block text-white text-lg font-semibold">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Message Input */}
      <div>
        <label className="block text-white text-lg font-semibold">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Type your message..."
          className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none h-32 resize-none"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-auto py-2 px-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-md hover:scale-105 transition-transform duration-300 mx-auto lg:flex lg:justify-center"
      >
        Send Email
      </button>
    </form>
  );
};

export default Form;
