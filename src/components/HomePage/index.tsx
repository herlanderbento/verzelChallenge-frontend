import { Col, Row } from "reactstrap";

import { Container } from "../../styles/container";
import { Section } from "./styles";

import emoji from "../../assets/icon/emoji.svg";
import banner from "../../assets/img/layer.png";
import { useHistory } from "react-router-dom";

export function HomePage() {
  const { push } = useHistory();

  return (
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="6" sm="6" className="my-3">
            <div className="hero-text">
              <div className="hero-sub-title">
                <img src={emoji} alt="" />
                <span className="sub-title"> Hey, seja bem-vindo!</span>
              </div>
              <h1 className="title">
                Aprenda <span>programação</span> <br />
                sem pagar nada
              </h1>
              <p className="text">
                Nossa missão é formar novos desenvolvedores de sistemas <br />
                (Os famosos DEVs) de uma forma fácil e <br /> com muito
                profissionalismo.
              </p>

              <div className="cta mb-3">
                <button onClick={() => push("/sign-up")} className="sign-up">
                  Cadastra-se agora
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6" sm="6" className="my-3">
            <div className="hero">
              <img src={banner} alt="" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
