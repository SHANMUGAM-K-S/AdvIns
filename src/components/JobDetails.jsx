import React, { useState, useEffect } from "react";
import axios from "axios";
import "./JobDetails.css";

const JobDetails = () => {
    const [formData, setFormData] = useState({
        name: "",
        experience: "",
        location: "",
        description: "",
        image: null
    });

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get("https://servers-j6sq.onrender.com/jobs")
            .then(response => setJobs(response.data))
            .catch(error => console.error("⚠️ Error fetching jobs:", error));
    }, []);

    const handleChange = (e) => {
        if (e.target.name === "image" && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFormData({ ...formData, image: file });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        axios.post("https://servers-j6sq.onrender.com/jobs", formDataToSend, {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(response => {
                console.log("✅ Job added:", response.data);
                setJobs([...jobs, response.data.job]);
                alert("✅ Job added successfully!");
                setFormData({ name: "", experience: "", location: "", description: "", image: null });
            })
            .catch(error => console.error("⚠️ Error adding job:", error));
    };

    const handleDelete = (id) => {
        axios.delete(`https://servers-j6sq.onrender.com/jobs/${id}`)
            .then(() => {
                alert("🗑️ Job removed successfully!");
                setJobs(jobs.filter(job => job.id !== id));
            })
            .catch(error => console.error("⚠️ Error deleting job:", error));
    };

    return (
        <div className="job-details">
            <h2>Manage Jobs</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" placeholder="Job ID " value={formData.id} onChange={handleChange} required />
                <input type="text" name="name" placeholder="Job Title" value={formData.name} onChange={handleChange} required />
                <input type="text" name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} required />
                <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
                <input type="text" name="description" placeholder="Job Description" value={formData.description} onChange={handleChange} required />
                <input type="file" name="image" onChange={handleChange} required />

                {/* Show image preview */}
                {formData.image && (
                    <img src={URL.createObjectURL(formData.image)} alt="Preview" style={{ width: "200px", height: "150px" }} />
                )}

                <button type="submit">➕ Add Job</button>
            </form>

            <h3>Existing Jobs</h3>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>
                        <strong>{job.name}</strong> - {job.location}
                        {job.id && <p><strong>Job ID:</strong> {job.id}</p>} {/* ✅ Displays manually entered Job ID */}
                        <p>{job.description}</p>
                        <button onClick={() => handleDelete(job.id)}>🗑️ Remove</button>
                    </li>
                ))}
            </ul>
        </div>


    );
};

export default JobDetails;
