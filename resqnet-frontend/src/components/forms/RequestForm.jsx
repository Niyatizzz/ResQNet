import { useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import "../../styles/RequestForm.css";

interface RequestFormProps {
  onCancel: () => void;
  onSubmit?: (data: {
    type: string,
    details: string,
    location: string,
  }) => void;
}

const RequestForm = ({ onCancel, onSubmit }: RequestFormProps) => {
  const [type, setType] = useState("");
  const [details, setDetails] = useState("");
  const [location, setLocation] = useState("Current Location");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        type,
        details,
        location,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="request-form">
      <div className="form-header">
        <h3 className="form-title">Request Assistance</h3>
        <p className="form-subtitle">
          Please provide details about the help you need
        </p>
      </div>

      <div className="form-fields">
        <div className="form-group">
          <Label htmlFor="request-type" className="form-label">
            Type of Assistance
          </Label>
          <select
            id="request-type"
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="" disabled>
              Select type of assistance
            </option>
            <option value="food">Food & Water</option>
            <option value="medical">Medical Aid</option>
            <option value="shelter">Shelter</option>
            <option value="evacuation">Evacuation</option>
            <option value="supplies">Emergency Supplies</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <Label htmlFor="details" className="form-label">
            Details
          </Label>
          <textarea
            id="details"
            className="form-textarea"
            placeholder="Please describe your situation and what you need..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={4}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <Label htmlFor="location" className="form-label">
            Your Location
          </Label>
          <Button type="button" variant="outline" className="location-button">
            <MapPin className="location-icon" size={16} />
            {location}
          </Button>
        </div>
      </div>

      <div className="form-actions">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="default">
          Submit Request
        </Button>
      </div>
    </form>
  );
};

export default RequestForm;
