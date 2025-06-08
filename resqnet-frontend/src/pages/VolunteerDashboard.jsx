import { useState, useEffect } from "react";
import axios from "axios";
import "./VolunteerDashboard.css"; // Import the custom styles

const VolunteerDashboard = () => {
  const [aidRequests, setAidRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/aidrequests"
        );
        setAidRequests(response.data);
      } catch (error) {
        console.error("Error fetching aid requests:", error);
      }
    };
    fetchRequests();
  }, []);

  const handleAccept = async (id) => {
    try {
      // This is where you’d update the request status via an API
      console.log(`Request ${id} accepted`);
    } catch (error) {
      console.error("Error accepting the request:", error);
    }
  };

  return (
    <div className="volunteer-dashboard">
      <h2>All Aid Requests</h2>
      <ul className="request-list">
        {aidRequests.length > 0 ? (
          aidRequests.map((request) => (
            <li key={request._id} className="request-card">
              <div className="request-info">
                <p className="request-type">
                  <strong>{request.type}</strong>
                </p>
                <p>{request.details}</p>
                <p>
                  <strong>Location:</strong>{" "}
                  {request.location.coordinates.join(", ")}
                </p>
              </div>
              <button
                className="accept-button"
                onClick={() => handleAccept(request._id)}
              >
                Accept
              </button>
            </li>
          ))
        ) : (
          <p className="no-requests">No aid requests found.</p>
        )}
      </ul>
    </div>
  );
};

export default VolunteerDashboard;
