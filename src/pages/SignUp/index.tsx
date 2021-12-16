import { useState, FormEvent, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaLock,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Col, Row, Container } from "reactstrap";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FormContent, Section, Description } from "./styles";
import { BtnSecond } from "../../components/Button/styles";
import { api } from "../../services/api";

interface ISignUPProps {
  name: string;
  email: string;
  password: string;
}

export function SignUp() {
  const { push } = useHistory();

  const [data, setData] = useState<ISignUPProps>({
    name: "",
    email: "",
    password: "",
  });

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  async function handleFormOnSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await api.post("/users", data);

      console.log(response);

      toast.success("Usuário cadastrado com sucesso👌");

      setData({
        name: "",
        email: "",
        password: "",
      });
    } catch (err) {
      toast.error("Falha ao cadastrar usuário 🤯");
      console.error(err);
    }
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

              <form onSubmit={handleFormOnSubmit}>
                <div className="form-items">
                  <Input
                    icon={FaUser}
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                    placeholder="name"
                    type="text"
                    required
                  />
                </div>

                <div className="form-items">
                  <Input
                    icon={FaEnvelope}
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                    placeholder="example@her.com"
                    type="email"
                    required
                  />
                </div>

                <div className="form-items">
                  <Input
                    icon={FaLock}
                    name="password"
                    value={data.password}
                    onChange={handleInputChange}
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
