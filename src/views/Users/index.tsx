import { Container, Col, Row } from "reactstrap";
import { Title } from "../../components/Title";
import { Section } from "./styles";

export default function Users() {
  return (
    <Section>
      <Container>
        <Row className="justify-content-center">
          <Col lg="11">
            <div className="dashboard-info">
              <Title subTitle="Usuários" />
              <div className="info">
                <span>Total de usuários (20)</span>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg="11">
            <div className="section">
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
