import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Container, Col, Row } from "reactstrap";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { api } from "../../services/api";
import { Section } from "./styles";

export default function Users() {
  const [data, setData] = useState({
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

  async function handleCreateUser(event: FormEvent) {
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
        <Row className="justify-content-center">
          <Col lg="11">
            <div className="dashboard-info mb-5">
              <Title subTitle="Usuários" />
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg="11">
            <form onSubmit={handleCreateUser}>
              <div className="row align-items-stretch">
                <div className="col-lg-4">
                  <label>Nome completo</label>

                  <Input
                    className="input-form"
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                    placeholder="name"
                    type="text"
                    required
                  />
                </div>
                <div className="col-lg-4">
                  <label>Email</label>

                  <Input
                    className="input-form"
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                    placeholder="example@her.com"
                    type="email"
                    required
                  />
                </div>
                <div className="col-lg-4">
                  <label>Password</label>
                  <Input
                    className="input-form"
                    name="password"
                    value={data.password}
                    onChange={handleInputChange}
                    placeholder="..........."
                    isPassword
                    type="password"
                    required
                  />
                </div>
                <div className="col-lg-4">
                  <Button className="mt-1">Cadastrar</Button>
                </div>
              </div>
            </form>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg="11">
            <div className="section">
              <div className="title">
                <h3>Lista de usuários</h3>
                <span>Total de Lista usuários (20)</span>
              </div>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <br />
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td></td>
                  </tr>
                  <div className="break"></div>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
