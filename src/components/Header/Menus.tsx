import { useState } from "react";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { Collapse, Nav, NavbarToggler } from "reactstrap";
import { allData } from "./data";
import { Link } from "./Link";
import { Button } from "./styles";

export function Menus() {
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
        <Button>
          <AiOutlineUserSwitch />
          Entrar
        </Button>
      </Collapse>
    </>
  );
}
