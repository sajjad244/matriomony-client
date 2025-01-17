const HowItWork = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800">
            How It Works
          </h2>
          <p className="text-gray-600 mt-2">
            Find your perfect match in 3 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Steps Section */}
          <div>
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Create Your Profile
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Sign up and build your profile by sharing details about
                    yourself and your preferences.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Search & Connect
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Explore profiles that match your criteria and start
                    meaningful conversations.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Upgrade to Premium
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Get access to exclusive features to maximize your chances of
                    finding the right match.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Membership Card */}
          <div>
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 text-center">
                Premium Membership
              </h3>
              <p className="text-gray-600 text-center mt-4">
                Enhance your experience with these benefits:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-700">
                    View contact details of matches
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-700">
                    Get priority visibility on searches
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-700">
                    Send unlimited personalized messages
                  </span>
                </li>
              </ul>
              <div className="mt-6 text-center">
                <button className="bg-blue-500 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-600">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
