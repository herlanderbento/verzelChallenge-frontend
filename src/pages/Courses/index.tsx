import { useEffect, useState } from "react";
import { Col, Row, TabContent, TabPane } from "reactstrap";
import { Container } from "../../styles/container";
import { styleHyphenFormat } from "../../utils";
import { Title, TitleRight } from "../../components/Title";
import { CourseContent, Section } from "./styles";
import video from "../../assets/video/video.mp4";
import { api } from "../../services/api";
import { Cards } from "./cards";
import { CardsCourses } from "./cardsCourses";

interface IAllDataModules {
  id: string;
  name: string;
  lessonCount: number;
}

interface IGetId {
  id: string;
}

interface ILesson {
  id: string;
  name: string;
  date_lesson: Date;
  module_id: string;
}

interface IAllDataModulesLesson {
  id: string;
  name: string;
  lessonCount: number;
  lesson: ILesson[];
}

export function Courses() {
  const [modules, setModules] = useState([]);
  const [modulesLessons, setModulesLessons] = useState([]);

  const getFirstId = modules.map((data: IGetId) => data?.id)[0];

  const [activeTab, setActiveTab] = useState(
    `${styleHyphenFormat(getFirstId)}`
  );

  useEffect(() => {
    async function fetchModules() {
      try {
        const { data } = await api.get("modules");
        setModules(data);
      } catch (err) {
        console.error(err);
      }
    }

    async function fetchModulesAndLessons() {
      try {
        const { data } = await api.get("modules/lessons");
        setModulesLessons(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchModules();
    fetchModulesAndLessons();
  }, []);

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
                {modules?.map(({ id, name, lessonCount }: IAllDataModules) => (
                  <Cards
                    key={styleHyphenFormat(id)}
                    className={
                      activeTab === `${styleHyphenFormat(id)}` ? "active" : ""
                    }
                    onClick={() => setActiveTab(`${styleHyphenFormat(id)}`)}
                    name={name}
                    lessonCountOne={lessonCount}
                    lessonCountTwo={lessonCount}
                  />
                ))}
              </Row>
            </div>
          </Col>
          <Col lg="9" md="9" sm="12">
            <CourseContent>
              <TabContent activeTab={activeTab}>
                {modulesLessons?.map((data: IAllDataModulesLesson) => (
                  <TabPane
                    key={styleHyphenFormat(data?.id)}
                    tabId={`${styleHyphenFormat(data?.id)}`}
                  >
                    <Row>
                      <Col lg="12" className="mb-4  course-header">
                        <TitleRight
                          className="sub-title-right"
                          subTitle={data?.name}
                          text="Todas as aulas disponíveis nesse módulo:"
                        />
                      </Col>
                      {data?.lesson?.map(({ id, name, date_lesson }) => (
                        <CardsCourses
                          video={video}
                          key={styleHyphenFormat(id)}
                          name={name}
                          date_lesson={date_lesson}
                        />
                      ))}
                    </Row>
                  </TabPane>
                ))}
              </TabContent>
            </CourseContent>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
