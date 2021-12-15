import { useState } from "react";
import { BsMailbox } from "react-icons/bs";
import { Col, Row, TabContent, TabPane } from "reactstrap";
import { Container } from "../../styles/container";
import { styleHyphenFormat } from "../../utils";
import { Title, TitleRight } from "../Title";
import { allDataModules } from "./data";
import {
  CardCourseItems,
  CardItems,
  CourseContent,
  Section,
  VideoBg,
} from "./styles";

import video from "../../assets/video/video.mp4";
import { AiFillCalendar } from "react-icons/ai";

interface IAllDataModules {
  id: string;
  name: string;
}

export function CoursePage() {
  const getFirstId = allDataModules.map((data) => data.id)[0];

  const [activeTab, setActiveTab] = useState(
    `${styleHyphenFormat(getFirstId)}`
  );

  return (
    <Section>
      <Container>
        <Row className="pb-5 align-items-stretch">
          <Col lg="3" sm="6" md="3">
            <Title
              className="pb-5"
              subTitle="Módulos"
              text="Selecione o módulo para ver as aulas disponíveis:
              "
            />
            <div className="modules-items">
              <Row className="pt-3">
                {allDataModules?.map(({ id, name }: IAllDataModules) => (
                  <Col lg="12" md="4" sm="6" className="mb-4" key={id}>
                    <CardItems
                      className={
                        activeTab === `${styleHyphenFormat(id)}` ? "active" : ""
                      }
                      onClick={() => setActiveTab(`${styleHyphenFormat(id)}`)}
                    >
                      <div className="d-flex">
                        <div className="icon icon-color-1">
                          <BsMailbox size={28} />
                        </div>
                        <div className="text">
                          <h5 className="title">{name}</h5>
                          <p className="desc">3/3 aulas</p>
                        </div>
                      </div>
                    </CardItems>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg="9" md="9" sm="12">
            <CourseContent>
              <TabContent activeTab={activeTab}>
                <TabPane
                  tabId={`${styleHyphenFormat(
                    "0080c03e-9439-4cd1-aa7b-853f28ddf74d"
                  )}`}
                >
                  <Row>
                    <Col lg="12" className="mb-4  course-header">
                      <TitleRight
                        className="sub-title-right"
                        subTitle="Projecto Frontend"
                        text="Todas as aulas disponíveis nesse módulo:"
                      />
                    </Col>
                    <Col lg="4">
                      <CardCourseItems>
                        <div className="video-content">
                          <VideoBg
                            playsInline
                            autoPlay
                            loop
                            muted
                            src={video}
                          />
                        </div>
                        <div className="description">
                          <h2>Iniciando como programador(a) na Devaria</h2>
                          <div className="date">
                            <AiFillCalendar size={25} />
                            <span>7 Março 2021</span>
                          </div>
                        </div>
                      </CardCourseItems>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane
                  tabId={`${styleHyphenFormat(
                    "dda392c4-36bd-4878-9dde-06067685e23b"
                  )}`}
                >
                  Tab 2 Content
                </TabPane>
                <TabPane
                  tabId={`${styleHyphenFormat(
                    "40ce95ef-2e7a-45a3-90ae-99491a47c527"
                  )}`}
                >
                  Tab 3 Content
                </TabPane>
              </TabContent>
            </CourseContent>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
