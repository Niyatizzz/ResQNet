import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./VictimDashboard.css"; // Import custom styles

const VictimDashboard = ({ victimId }) => {
  const [aidRequests, setAidRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
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
    <div className="victim-dashboard">
      <h2>My Aid Requests</h2>
      <ul className="request-list">
        {aidRequests.length > 0 ? (
          aidRequests.map((request) => (
            <li key={request._id} className="request-card">
              <div>
                <p className="request-type">
                  <strong>Type:</strong> {request.type}
                </p>
                <p className="request-status">
                  <strong>Status:</strong> {request.status}
                </p>
                <p>
                  <strong>Details:</strong> {request.details}
                </p>
                <p>
                  <strong>Location:</strong>{" "}
                  {request.location.coordinates.join(", ")}
                </p>
              </div>
            </li>
          ))
        ) : (
          <p className="no-requests">No aid requests found.</p>
        )}
      </ul>

      <button
        onClick={() => navigate("/request-aid")}
        className="request-button"
      >
        Request Aid
      </button>
    </div>
  );
};

export default VictimDashboard;
