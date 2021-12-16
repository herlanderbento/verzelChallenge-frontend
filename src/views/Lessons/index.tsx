import { Container, Col, Row } from "reactstrap";
import { Title } from "../../components/Title";
import { Form } from "./form";
import { Section } from "./styles";
import { Table } from "./table";

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
        <Form />
        <Table />
      </Container>
    </Section>
  );
}
