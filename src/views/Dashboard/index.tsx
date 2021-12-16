import { Container, Col, Row, Progress } from "reactstrap";
import { Title } from "../../components/Title";
import { CardItems, Section } from "./styles";

import emoji from "../../assets/icon/emoji.svg";
import { AiOutlineUser } from "react-icons/ai";
import { RiSoundModuleLine } from "react-icons/ri";

import { SiDiscourse } from "react-icons/si";

export default function Dashboard() {
  return (
    <Section>
      <Container>
        <Row className="justify-content-center">
          <Col lg="11">
            <div className="dashboard-info">
              <Title subTitle="Dashboard" />
              <div className="info">
                <img src={emoji} alt="" />
                <h4 className="h4-info">
                  Hey <span>Herlander</span>, seja bem-vindo!
                </h4>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="11" className="cards-content">
            <Row className="align-items-stretch">
              <Col lg="4">
                <CardItems>
                  <div className="header">
                    <div className="desc">
                      <h4 className="count">450</h4>
                      <span className="title">Usuários</span>
                    </div>
                    <div className="icon">
                      <AiOutlineUser className="color-success" />
                    </div>
                  </div>
                  <div className="body">
                    <Progress animated color="success" value="25" />
                  </div>
                </CardItems>
              </Col>
              <Col lg="4">
                <CardItems>
                  <div className="header">
                    <div className="desc">
                      <h4 className="count">450</h4>
                      <span className="title">Aulas</span>
                    </div>
                    <div className="icon">
                      <SiDiscourse className="color-info" />
                    </div>
                  </div>
                  <div className="body">
                    <Progress animated color="info" value="25" />
                  </div>
                </CardItems>
              </Col>
              <Col lg="4">
                <CardItems>
                  <div className="header">
                    <div className="desc">
                      <h4 className="count">450</h4>
                      <span className="title">Módulos</span>
                    </div>
                    <div className="icon">
                      <RiSoundModuleLine className="color-danger" />
                    </div>
                  </div>
                  <div className="body">
                    <Progress animated color="danger" value="25" />
                  </div>
                </CardItems>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="11">
            <div className="section">
              <div className="title">
                <h3>Aulas</h3>
                <span>Total de aulas (20)</span>
              </div>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Aulas</th>
                    <th scope="col">Data</th>
                    <th scope="col">Módulos</th>
                  </tr>
                </thead>
                <br />
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <div className="break"></div>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
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
