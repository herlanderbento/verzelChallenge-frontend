import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/">
      <span className="navbar-brand">
        dv<span>.</span>courses
      </span>
    </Link>
  );
}
