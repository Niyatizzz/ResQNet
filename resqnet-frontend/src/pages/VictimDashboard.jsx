import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // <-- Import useNavigate here
import axios from "axios";

const VictimDashboard = ({ victimId }) => {
  const [aidRequests, setAidRequests] = useState([]);
  const navigate = useNavigate(); // <-- Initialize navigate function

  useEffect(() => {
    // Fetch aid requests created by the victim
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/aidrequests/victim/${victimId}`
        );
        setAidRequests(response.data);
      } catch (error) {
        console.error("Error fetching aid requests:", error);
      }
    };
    fetchRequests();
  }, [victimId]);

  return (
    <div className="container mx-auto p-6 max-w-lg text-center">
      <h2 className="text-2xl font-semibold mb-4">My Aid Requests</h2>
      <ul className="space-y-4">
        {aidRequests.length > 0 ? (
          aidRequests.map((request) => (
            <li
              key={request._id}
              className="bg-gray-200 p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <strong className="text-lg">{request.type}</strong> -{" "}
                {request.status}
                <p>{request.details}</p>
                <p>Location: {request.location.coordinates}</p>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No aid requests found.</p>
        )}
      </ul>

      {/* Request Aid Button */}
      <button
        onClick={() => navigate("/request-aid")}
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Request Aid
      </button>
    </div>
  );
};

export default VictimDashboard;
