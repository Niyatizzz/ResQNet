import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const VolunteerDashboard = () => {
  const [aidRequests, setAidRequests] = useState([]);
  const volunteerId = "VOLUNTEER_ID"; // Replace with the actual volunteer ID

  useEffect(() => {
    axios
      .get(`http://localhost:5000/aidrequests/volunteer/${volunteerId}`)
      .then((res) => setAidRequests(res.data))
      .catch((err) => console.error("Error fetching aid requests:", err));
  }, [volunteerId]);

  const handleAccept = (id) => {
    console.log(`Request ${id} accepted`);
    // Implement logic to mark request as "In Progress"
  };

  return (
    <div style={styles.container}>
      <h2>Volunteer Dashboard</h2>
      <ul style={styles.list}>
        {aidRequests.map((request) => (
          <li key={request._id} style={styles.item}>
            <strong>{request.type}</strong> - {request.location}
            <button
              style={styles.button}
              onClick={() => handleAccept(request._id)}
            >
              Accept
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: { padding: "20px", maxWidth: "600px", margin: "auto" },
  list: { listStyle: "none", padding: 0 },
  item: {
    background: "#f8f9fa",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  button: {
    background: "#28a745",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default VolunteerDashboard;
