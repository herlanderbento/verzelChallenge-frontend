import { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
// import { useHistory } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { Collapse, Nav, NavbarToggler } from "reactstrap";
import { allData } from "./data";
import { Link } from "./Link";
import { UserInfo } from "../UserInfo";
import { useAuth } from "../../hooks/useAuth";

export function Menus() {
  const { signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <NavbarToggler onClick={toggle}>
        <BiMenuAltRight />
      </NavbarToggler>

      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          {allData?.map(({ id, route, menu }) => (
            <Link key={id} route={route} menu={menu} />
          ))}
        </Nav>
        <UserInfo />
        <AiOutlineLogout onClick={signOut} className="icon" size={28} />
      </Collapse>
    </>
  );
}
