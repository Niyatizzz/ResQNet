import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const OrganizationDashboard = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [aidRequests, setAidRequests] = useState([]);
  const orgId = "ORG_ID"; // Replace with the actual organization ID

  useEffect(() => {
    axios
      .get("http://localhost:5000/volunteers") // Replace with the correct endpoint for volunteers
      .then((res) => setVolunteers(res.data))
      .catch((err) => console.error("Error fetching volunteers:", err));

    axios
      .get(`http://localhost:5000/aidrequests/organization/${orgId}`)
      .then((res) => setAidRequests(res.data))
      .catch((err) => console.error("Error fetching aid requests:", err));
  }, [orgId]);

  return (
    <div style={styles.container}>
      <h2>Organization Dashboard</h2>

      <h3>Volunteers</h3>
      <ul style={styles.list}>
        {volunteers.map((vol) => (
          <li key={vol._id} style={styles.item}>
            {vol.name} - {vol.organization}
          </li>
        ))}
      </ul>

      <h3>Aid Requests</h3>
      <ul style={styles.list}>
        {aidRequests.map((request) => (
          <li key={request._id} style={styles.item}>
            {request.type} - {request.location}
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
    background: "#e9ecef",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
};

export default OrganizationDashboard;
