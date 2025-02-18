import {useState} from "react";

const fakeStories = [
  {
    _id: "001",
    bioFormData: {
      biodataType: "married couple",
      name: "Alice & Bob",
      img: "https://i.ibb.co.com/g42wk1V/christonya-orlando-rehearsal-dinner-couple-walking-0322-2000-sq-593769812cbb4b1586b9717d8ba93d3b-945.jpg",
      marriageDate: "2023-05-20",
      reviewStar: 5,
      successStory:
        "Alice and Bob met on this platform and found their soulmate. It's been a wonderful journey!",
    },
  },
  {
    _id: "002",
    bioFormData: {
      biodataType: "married couple",
      name: "John & Emma",
      img: "https://i.ibb.co.com/dg7rc0g/pearl-1400-1024x1024.jpg",
      marriageDate: "2022-08-15",
      reviewStar: 4,
      successStory:
        "John and Emma couldn't be happier. Thanks to this platform for making it happen!",
    },
  },
  {
    _id: "003",
    bioFormData: {
      biodataType: "married couple",
      name: "Liam & Sophia",
      img: "https://i.ibb.co.com/q55swRm/small-things-do-as-couple-bring-you-closer-than-ever.webp",
      marriageDate: "2023-12-01",
      reviewStar: 5,
      successStory:
        "Liam and Sophia found each other here and tied the knot recently. Highly recommended!",
    },
  },
  {
    _id: "004",
    bioFormData: {
      biodataType: "married couple",
      name: "Emma & Oliver",
      img: "https://i.ibb.co.com/JQKY88V/you-dont-cross-my-mind-you-live-in-it-royalty-free-image-1695152921.jpg",
      marriageDate: "2023-01-20",
      reviewStar: 4,
      successStory:
        "Emma and Oliver are a happy couple who found each other here. Thank you!",
    },
  },
  {
    _id: "005",
    bioFormData: {
      biodataType: "married couple",
      name: "Sophia & William",
      img: "https://i.ibb.co.com/c3qNysh/03-10-20-BOU-1.jpg",
      marriageDate: "2022-12-15",
      reviewStar: 5,
      successStory:
        "Sophia and William's journey began here. They highly recommend this platform!",
    },
  },
  {
    _id: "006",
    bioFormData: {
      biodataType: "married couple",
      name: "Mia & Noah",
      img: "https://i.ibb.co.com/41gq87n/Mann-traegt-seine-Partnerin-Huckepack-Neben-Text.jpg",
      marriageDate: "2023-06-10",
      reviewStar: 5,
      successStory:
        "Mia and Noah's love story is a beautiful example of finding true love here!",
    },
  },
];

const SuccessStory = () => {
  const [sortOrder, setSortOrder] = useState("desc");

  // Sort success stories based on the selected order
  const sortedStories = [...fakeStories].sort((a, b) =>
    sortOrder === "asc"
      ? new Date(a.bioFormData.marriageDate) -
        new Date(b.bioFormData.marriageDate)
      : new Date(b.bioFormData.marriageDate) -
        new Date(a.bioFormData.marriageDate)
  );

  return (
    <div className="container mx-auto my-10  dark:bg-gray-900 p-5">
      <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 text-center mb-5">
        Success Stories
      </h2>

      {/* Sorting Dropdown */}
      <div className="text-center mb-5">
        <label
          htmlFor="sortOrder"
          className="text-lg font-medium text-gray-700 dark:text-gray-200"
        >
          Sort By Marriage Date:
        </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="ml-3 p-2 border rounded shadow-sm dark:bg-gray-800 dark:text-gray-200"
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedStories.map((story) => (
          <div
            key={story._id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
          >
            {/* Couple Image */}
            <img
              src={story.bioFormData?.img || "https://via.placeholder.com/150"}
              alt={story.bioFormData?.name}
              className="w-24 h-24 rounded-full border-4 border-gray-300 mb-4 object-cover"
            />
            {/* Couple Name */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {story.bioFormData?.name || "Anonymous Couple"}
            </h3>
            {/* Marriage Date */}
            <p className="text-gray-600 mt-1 dark:text-gray-400">
              <strong>Marriage Date:</strong>{" "}
              {new Date(story.bioFormData?.marriageDate).toLocaleDateString() ||
                "N/A"}
            </p>
            {/* Review Stars */}
            <div className="flex items-center justify-center mt-2">
              {[...Array(story.bioFormData?.reviewStar || 5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">
                  ★
                </span>
              ))}
            </div>
            {/* Success Story */}
            <p className="text-gray-700 mt-3 text-sm dark:text-gray-300">
              {story.bioFormData?.successStory || "No story shared."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStory;
