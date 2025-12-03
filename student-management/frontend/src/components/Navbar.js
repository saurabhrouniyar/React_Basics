import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <NavLink to="/" className="navbar-brand">SMS</NavLink>
      <NavLink to="/add" className="btn btn-primary">Add Student</NavLink>
    </nav>
  );
}
