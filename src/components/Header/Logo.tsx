import { Link } from "react-router-dom";
import { NavbarBrand } from "reactstrap";

export function Logo() {
  return (
    <Link to="/">
      <NavbarBrand>
        dv<span>.</span>courses
      </NavbarBrand>
    </Link>
  );
}
