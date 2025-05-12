const HowItWork = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">
            How It Works
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Find your perfect match in 3 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Steps Section */}
          <div>
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Create Your Profile",
                  description:
                    "Sign up and build your profile by sharing details about yourself and your preferences.",
                },
                {
                  step: 2,
                  title: "Search & Connect",
                  description:
                    "Explore profiles that match your criteria and start meaningful conversations.",
                },
                {
                  step: 3,
                  title: "Upgrade to Premium",
                  description:
                    "Get access to exclusive features to maximize your chances of finding the right match.",
                },
              ].map(({step, title, description}) => (
                <div key={step} className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                    {step}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Membership Card */}
          <div>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center">
                Premium Membership
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mt-4">
                Enhance your experience with these benefits:
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "View contact details of matches",
                  "Get priority visibility on searches",
                  "Send unlimited personalized messages",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
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
                    <span className="ml-3 text-gray-700 dark:text-gray-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <button className="btn-outline">Upgrade Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
