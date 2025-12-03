import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const [form, setForm] = useState({ name: "", email: "", course: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:5000/api/students", form)
      .then(() => navigate("/"));
  }

  return (
    <div className="container mt-4">
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit} className="mt-4">
        <input className="form-control mb-2" name="name" placeholder="Name" onChange={handleChange} />
        <input className="form-control mb-2" name="email" placeholder="Email" onChange={handleChange} />
        <input className="form-control mb-2" name="course" placeholder="Course" onChange={handleChange} />
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}
