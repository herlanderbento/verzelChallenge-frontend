import { Container, Col, Row } from "reactstrap";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { Section, Select } from "./styles";

export default function Lessons() {
  return (
    <Section>
      <Container>
        <Row className="justify-content-center">
          <Col lg="11">
            <div className="dashboard-info mb-5">
              <Title subTitle="Aulas" />
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg="11">
            <form>
              <div className="row align-items-stretch">
                <div className="col-lg-3 col-lg-3">
                  <label>Aulas</label>

                  <Input
                    className="input-form"
                    name="name"
                    placeholder="Digita o aula"
                    type="text"
                    required
                  />
                </div>
                <div className="col-lg-3 col-lg-3">
                  <label>Data da aulas</label>

                  <Input
                    className="input-form"
                    name="name"
                    placeholder="example@doe.com"
                    type="date"
                    required
                  />
                </div>
                <div className="col-lg-3 col-lg-3">
                  <label>Seleciona o módulo</label>
                  <Select autoComplete="off" className="mb-3">
                    <option className="option">Default Select</option>
                    <option>Default Select</option>
                    <option>Default Select</option>
                  </Select>
                </div>
                <div className="col-lg-3 col-lg- mt-5">
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
                <h3>Lista de Aulas</h3>
                <span>Total de aulas (20)</span>
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
