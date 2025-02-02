import { useState, useEffect } from "react";
import axios from "axios";

const VolunteerDashboard = ({ volunteerId }) => {
  const [aidRequests, setAidRequests] = useState([]);

  useEffect(() => {
    // Fetch aid requests assigned to the volunteer
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/aidrequests/volunteer/${volunteerId}`
        );
        setAidRequests(response.data);
      } catch (error) {
        console.error("Error fetching aid requests:", error);
      }
    };
    fetchRequests();
  }, [volunteerId]);

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h2 className="text-2xl font-semibold mb-4">Open Aid Requests</h2>
      <ul className="space-y-4">
        {aidRequests.map((request) => (
          <li
            key={request._id}
            className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <strong className="text-lg">{request.type}</strong> -{" "}
              {request.location.coordinates}
              <p>{request.details}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VolunteerDashboard;
