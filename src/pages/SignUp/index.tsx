import {
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaLock,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FormContent, Section, Description } from "./styles";
import { useState, FormEvent } from "react";
import { Col, Row, Container } from "reactstrap";
import { BtnSecond } from "../../components/Button/styles";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useHistory } from "react-router-dom";

export function SignUp() {
  const { push } = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      email,
      password,
    };

    console.log(data);

    setPassword("");
    setEmail("");
  }

  return (
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col lg="8">
            <Description>
              <h4>
                Faz login para continuar <br />
                a navegar na <br />
                plataforma
              </h4>
              <BtnSecond onClick={() => push("/sign-in")}>
                <AiOutlineUserAdd />
                Faz o login
              </BtnSecond>
            </Description>
          </Col>
          <Col lg="4">
            <FormContent>
              <div className="header">
                <span className="title">Entrar na plataforma</span>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-items">
                  <Input
                    icon={FaUser}
                    name="email"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                    type="text"
                    required
                  />
                </div>

                <div className="form-items">
                  <Input
                    icon={FaEnvelope}
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@her.com"
                    type="email"
                    required
                  />
                </div>

                <div className="form-items">
                  <Input
                    icon={FaLock}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="..........."
                    isPassword
                    type="password"
                    required
                  />
                </div>
                <div className="form-items">
                  <Button type="submit">Entrar</Button>
                </div>
              </form>

              <div className="footer">
                <ul className="socials-networks">
                  <li>
                    <label>
                      <FaWhatsapp />
                    </label>
                  </li>
                  <li>
                    <label>
                      <FaGoogle />
                    </label>
                  </li>
                  <li>
                    <label>
                      <FaFacebookF />
                    </label>
                  </li>
                </ul>
              </div>
            </FormContent>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
