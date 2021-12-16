import {
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaLock,
  FaWhatsapp,
} from "react-icons/fa";
import { Input } from "./../../components/Input";
import { Button } from "../../components/Button";
import { FormContent, Section, Description } from "./styles";
import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { Col, Row, Container } from "reactstrap";
import { BtnSecond } from "../../components/Button/styles";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";

export default function SignIn() {
  const { user, signIn } = useAuth();

  const { push } = useHistory();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    try {
      await signIn(data);
      toast.success("Login efectuado com sucesso👌");
      setData({
        email: "",
        password: "",
      });
    } catch (err) {
      toast.error("Email ou senha inválida 🤯");
      console.log(err);
    }
  }

  useEffect(() => {
    console.log(user);
  }, [user]);

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
              <BtnSecond onClick={() => push("/sign-up")}>
                <AiOutlineUserAdd />
                Cadastrar-se agora
              </BtnSecond>
            </Description>
          </Col>
          <Col lg="4">
            <FormContent>
              <div className="header">
                <span className="title">Entrar na plataforma</span>
              </div>

              <form onSubmit={handleSignIn}>
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
