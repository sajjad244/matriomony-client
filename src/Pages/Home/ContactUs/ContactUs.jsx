const ContactUs = () => {
  return (
    <div id="contact" className="bg-white dark:bg-gray-900 py-10 shadow-lg">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            We would love to hear from you! Fill out the form below to get in
            touch.
          </p>
        </div>

        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
              placeholder="Your Email"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              className="block text-gray-700 dark:text-gray-200 font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 dark:bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-600 dark:hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
