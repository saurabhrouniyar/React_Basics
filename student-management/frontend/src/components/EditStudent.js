import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditStudent() {
  const { id } = useParams();
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/students/${id}`)
      .then(res => setForm(res.data));
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/students/${id}`, form)
      .then(() => navigate("/"));
  }

  return (
    <div className="container mt-4">
      <h2>Edit Student</h2>

      <form onSubmit={handleSubmit} className="mt-3">
        <input className="form-control mb-2" name="name" value={form.name || ""} onChange={handleChange} />
        <input className="form-control mb-2" name="email" value={form.email || ""} onChange={handleChange} />
        <input className="form-control mb-2" name="course" value={form.course || ""} onChange={handleChange} />
        <button className="btn btn-success">Update</button>
      </form>
    </div>
  );
}
