import { Container, Col, Row, Progress } from "reactstrap";
import { Title } from "../../components/Title";
import { CardItems, Section } from "./styles";

import emoji from "../../assets/icon/emoji.svg";
import { AiOutlineUser } from "react-icons/ai";
import { RiSoundModuleLine } from "react-icons/ri";

import { SiDiscourse } from "react-icons/si";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();
  const [allDataLessons, setAllDataLessons] = useState([]);
  const [allCountUsers, setAllCountUsers] = useState([]);
  const [allCountModules, setAllCountModules] = useState([]);

  async function fetchAllLessons() {
    try {
      const { data } = await api.get("lessons");

      setAllDataLessons(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchAllModules() {
    try {
      const { data } = await api.get("modules");

      setAllCountModules(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchAllUsers() {
    try {
      const { data } = await api.get("users");

      setAllCountUsers(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAllLessons();
    fetchAllUsers();
    fetchAllModules();
  }, []);

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
                  Hey <span>{user?.name}</span>, seja bem-vindo!
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
                      <h4 className="count">{allCountUsers.length}</h4>
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
                      <h4 className="count">{allDataLessons.length}</h4>
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
                      <h4 className="count">{allCountModules.length}</h4>
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
                <span>Total de aulas ({allDataLessons.length})</span>
              </div>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Aulas</th>
                    <th scope="col">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {allDataLessons?.map(({ id, name, date_lesson, modules }) => (
                    <>
                      <tr>
                        <td>{name}</td>
                        <td>{String(date_lesson)?.substring(0, 10)}</td>
                      </tr>
                      <th></th>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
