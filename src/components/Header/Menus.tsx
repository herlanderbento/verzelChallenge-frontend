import { useState } from "react";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { Collapse, Nav, NavbarToggler } from "reactstrap";
import { allData } from "./data";
import { Link } from "./Link";
import { ButtonSecondary } from "../Button";

export function Menus() {
  const { push } = useHistory();
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
        <ButtonSecondary onClick={() => push("/sign-in")}>
          <AiOutlineUserSwitch />
          Entrar
        </ButtonSecondary>
      </Collapse>
    </>
  );
}
