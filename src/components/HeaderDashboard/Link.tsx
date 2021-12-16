import { NavLink } from "react-router-dom";
import { NavItem } from "reactstrap";

interface ILinksProps {
  route: string;
  menu: string;
}

export function Link({ route, menu }: ILinksProps) {
  return (
    <NavItem>
      <NavLink
        exact
        activeClassName="is-Active"
        className="nav-link"
        to={`${route}`}
      >
        {menu}
      </NavLink>
    </NavItem>
  );
}
