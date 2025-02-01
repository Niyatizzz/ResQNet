import { useState } from "react";
import axios from "axios";
import MapComponent from "./MapsComponent";
import "./AidRequestForm.css";

const AidRequestForm = () => {
  const [aidType, setAidType] = useState("");
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState("");

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!aidType || !location) {
      alert("Please select an aid type and pin your location on the map.");
      return;
    }

    const requestData = {
      aidType,
      latitude: location[0],
      longitude: location[1],
      description,
    };

    try {
      await axios.post("http://localhost:5000/api/requests", requestData);
      alert("Aid request submitted successfully!");
      setAidType("");
      setLocation(null);
      setDescription("");
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Failed to submit request. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Request Aid</h2>

      {/* Aid Type Selection */}
      <label className="block mb-2">Select Aid Type:</label>
      <select
        value={aidType}
        onChange={(e) => setAidType(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="">Select...</option>
        <option value="food">Food</option>
        <option value="shelter">Shelter</option>
        <option value="medical">Medical</option>
      </select>

      {/* Description Field */}
      <label className="block mb-2">Additional Information:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        placeholder="Describe any specific needs..."
      ></textarea>

      {/* Map Component */}
      <label className="block mb-2">Pin Your Location:</label>
      <MapComponent onLocationSelect={setLocation} />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
      >
        Submit Request
      </button>
    </div>
  );
};

export default AidRequestForm;
