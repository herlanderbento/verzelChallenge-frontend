import { useState } from "react";
import { BsMailbox } from "react-icons/bs";
import { Col, Row, TabContent, TabPane } from "reactstrap";
import { Container } from "../../styles/container";
import { TitleCenter } from "../Title";
import { CardItems, FaqItems, Section } from "./styles";

export function CoursePage() {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <Section>
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="8" sm="12" className="pt-3 pb-5">
            <TitleCenter
              subTitle="FAQ"
              title="Tem alguma perguntas? Bem, nós temos respostas."
              text="Plataforma de reserva e agendamento de eventos que economiza o teu tempo."
            />
          </Col>
        </Row>
        <Row className="pt-3 pb-5 align-items-stretch">
          <Col lg="3" sm="6" md="3">
            <Row>
              <Col lg="12" md="4" sm="6" className="mb-4">
                <CardItems
                  className={activeTab === "1" ? "active" : ""}
                  onClick={() => setActiveTab("1")}
                >
                  <div className="d-flex">
                    <div className="icon icon-color-1">
                      <BsMailbox size={28} />
                    </div>
                    <div className="text">
                      <h5 className="title">Configuração flexível</h5>
                      <p className="desc">Um sistema de reserva de eventos.</p>
                    </div>
                  </div>
                </CardItems>
              </Col>
              <Col lg="12" md="4" sm="6" className="mb-4">
                <CardItems
                  className={activeTab === "2" ? "active" : ""}
                  onClick={() => setActiveTab("2")}
                >
                  <div className="d-flex">
                    <div className="icon icon-color-2">
                      <BsMailbox size={28} />
                    </div>
                    <div className="text">
                      <h5 className="title">Organização Fácil</h5>
                      <p className="desc">Um sistema de reserva de eventos.</p>
                    </div>
                  </div>
                </CardItems>
              </Col>
              <Col lg="12" md="4" sm="6" className="">
                <CardItems
                  className={activeTab === "3" ? "active" : ""}
                  onClick={() => setActiveTab("3")}
                >
                  <div className="d-flex">
                    <div className="icon icon-color-3">
                      <BsMailbox size={28} />
                    </div>
                    <div className="text">
                      <h5 className="title">Reserva Simples</h5>
                      <p className="desc">Um sistema de reserva de eventos.</p>
                    </div>
                  </div>
                </CardItems>
              </Col>
            </Row>
          </Col>
          <Col lg="9" md="9" sm="12">
            <FaqItems>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <div className="faq-items"> Kiari Code</div>
                </TabPane>
                <TabPane tabId="2">Tab 2 Content</TabPane>
                <TabPane tabId="3">Tab 3 Content</TabPane>
              </TabContent>
            </FaqItems>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
