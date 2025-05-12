const WhyChooseUs = () => {
  const features = [
    {
      title: "Verified Profiles",
      desc: "Each profile is manually verified to ensure authenticity.",
    },
    {
      title: "Privacy First",
      desc: "Your personal data is secure and never shared without permission.",
    },
    {
      title: "Smart Matchmaking",
      desc: "AI-powered matching system to find the perfect partner.",
    },
  ];

  return (
    <section className="container mx-auto my-10  dark:bg-gray-900 p-5">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 text-center mb-10">
        Why Choose Us
      </h2>
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto px-4">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-pink-100 mx-auto mb-4 flex items-center justify-center text-pink-600 text-xl font-bold">
              {idx + 1}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-1 dark:text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
