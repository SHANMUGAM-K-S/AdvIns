import React, { useState } from "react";
import axios from "axios";

const JobDetails = () => {
    const [formData, setFormData] = useState({
        name: "",
        experience: "",
        location: "",
        description: "",
        image: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/jobs", formData)
            .then(response => {
                console.log("Job added:", response.data);
                alert("✅ Job added successfully!");
                setFormData({ name: "", experience: "", location: "", description: "", image: "" });
            })
            .catch(error => console.error("⚠️ Error adding job:", error));
    };

    return (
        <div className="job-details" style={{ marginTop: '150px' }}>
            <h2>Add a New Job</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Job Title" value={formData.name} onChange={handleChange} required />
                <input type="text" name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} required />
                <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
                <input type="text" name="description" placeholder="Job Description" value={formData.description} onChange={handleChange} required />
                <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
                <button type="submit">➕ Add Job</button>
            </form>
        </div>
    );
};

export default JobDetails;
