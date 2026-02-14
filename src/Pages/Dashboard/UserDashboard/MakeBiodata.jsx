import {useState} from "react";
import toast from "react-hot-toast";

const MakeBiodata = () => {
  const [fields, setFields] = useState([{title: "", description: ""}]);

  const [previewData, setPreviewData] = useState(null);

  const addField = () => {
    setFields([...fields, {title: "", description: ""}]);
  };

  // Handle input change --->
  const handleFieldChange = (index, key, value) => {
    const newFields = [...fields];
    newFields[index][key] = value;
    setFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const finalData = {
      ...data,
      customFields: fields,
    };

    setPreviewData(finalData);
    toast.success("Biodata Preview Generated!");
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Make Biodata
      </h2>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label className="block font-medium mb-2 text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="w-full border rounded-md p-2 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="block font-medium mb-2 text-gray-700 dark:text-gray-300">
            Age
          </label>
          <input
            name="age"
            type="number"
            className="w-full border rounded-md p-2 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Occupation */}
        <div className="mb-4">
          <label className="block font-medium mb-2 text-gray-700 dark:text-gray-300">
            Occupation
          </label>
          <input
            name="occupation"
            type="text"
            className="w-full border rounded-md p-2 dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Custom Dynamic Fields Section */}
        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-white">
          Custom Biodata Fields
        </h3>

        {fields.map((field, index) => (
          <div key={index} className="flex gap-3 mb-3">
            <input
              type="text"
              placeholder="Field Name (e.g. Brothers)"
              className="border p-2 w-1/2 rounded-md dark:bg-gray-700 dark:text-white"
              onChange={(e) =>
                handleFieldChange(index, "title", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Description (e.g. 5 Brothers)"
              className="border p-2 w-1/2 rounded-md dark:bg-gray-700 dark:text-white"
              onChange={(e) =>
                handleFieldChange(index, "description", e.target.value)
              }
            />
          </div>
        ))}

        {/* Plus Button */}
        <button
          type="button"
          onClick={addField}
          className="bg-green-600 text-white px-3 py-1 rounded mb-6"
        >
          + Add Field
        </button>

        {/* Submit */}
        <button type="submit" className="w-full btn-outline">
          Preview Biodata
        </button>
      </form>

      {/* PREVIEW SECTION */}

      {previewData && (
        <div className="mt-10 bg-white dark:bg-gray-900 p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Biodata Preview</h2>

          <p>
            <b>Name:</b> {previewData.name}
          </p>
          <p>
            <b>Age:</b> {previewData.age}
          </p>
          <p>
            <b>Occupation:</b> {previewData.occupation}
          </p>

          <h3 className="mt-4 font-semibold">Additional Information:</h3>

          {previewData.customFields.map((f, i) => (
            <p key={i}>
              <b>{f.title}:</b> {f.description}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default MakeBiodata;
