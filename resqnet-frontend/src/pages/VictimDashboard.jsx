import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

const VictimDashboard = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate(); // For navigation
  const victimId = "VICTIM_ID"; // Replace with the actual victim ID

  useEffect(() => {
    axios
      .get(`http://localhost:5000/aidrequests/victim/${victimId}`)
      .then((res) => setRequests(res.data))
      .catch((err) => console.error("Error fetching requests:", err));
  }, [victimId]);

  // Function to navigate to the aid request form
  const handleRequestAid = () => {
    navigate("/request-aid");
  };

  return (
    <div style={styles.container}>
      <h2>Victim Dashboard</h2>
      <h3>My Aid Requests</h3>
      <ul style={styles.list}>
        {requests.length > 0 ? (
          requests.map((req) => (
            <li key={req._id} style={styles.item}>
              <strong>{req.type}</strong> - {req.status}
            </li>
          ))
        ) : (
          <p>No aid requests found.</p>
        )}
      </ul>

      {/* Request Aid Button */}
      <button style={styles.button} onClick={handleRequestAid}>
        Request Aid
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "auto",
    textAlign: "center",
  },
  list: { listStyle: "none", padding: 0 },
  item: {
    background: "#e9ecef",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  button: {
    background: "#007bff",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "20px",
  },
};

export default VictimDashboard;
