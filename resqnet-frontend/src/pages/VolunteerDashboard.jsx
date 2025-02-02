import { useState, useEffect } from "react";
import axios from "axios";

const VolunteerDashboard = () => {
  const [aidRequests, setAidRequests] = useState([]);

  useEffect(() => {
    // Fetch all aid requests (no filtering based on volunteer)
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/aidrequests"
        );
        setAidRequests(response.data); // All aid requests
      } catch (error) {
        console.error("Error fetching aid requests:", error);
      }
    };
    fetchRequests();
  }, []);

  const handleAccept = async (id) => {
    try {
      // Here, you might update the request's status (if needed)
      console.log(`Request ${id} accepted`);
      // Make an API call to update the request status to "in-progress" or something
    } catch (error) {
      console.error("Error accepting the request:", error);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-2xl font-semibold mb-6">All Aid Requests</h2>
      <ul className="space-y-4">
        {aidRequests.length > 0 ? (
          aidRequests.map((request) => (
            <li
              key={request._id}
              className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div className="space-y-2">
                <p className="font-bold text-lg">{request.type}</p>
                <p>{request.details}</p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {request.location.coordinates.join(", ")}
                </p>
              </div>
              <button
                onClick={() => handleAccept(request._id)}
                className="ml-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Accept
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No aid requests found.</p>
        )}
      </ul>
    </div>
  );
};

export default VolunteerDashboard;
