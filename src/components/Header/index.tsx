import { Navbar } from "reactstrap";
import { Container } from "../../styles/container";
import { HeaderContent } from "./styles";

import { Logo } from "./Logo";
import { Menus } from "./Menus";

export default function Header() {
  return (
    <HeaderContent>
      <Container>
        <Navbar expand="md">
          <Logo />
          <Menus />
        </Navbar>
      </Container>
    </HeaderContent>
  );
}
