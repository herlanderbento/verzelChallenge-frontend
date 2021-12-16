import { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { api } from "../../services/api";
import { styleHyphenFormat } from "../../utils";

export function Table() {
  const [allDataLessons, setAllDataLessons] = useState([]);

  async function fetchAllLessons() {
    try {
      const { data } = await api.get("lessons");

      setAllDataLessons(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAllLessons();
  }, []);
  return (
    <Row className="justify-content-center">
      <Col lg="11">
        <div className="section">
          <div className="title">
            <h3>Lista de Aulas</h3>
            <span>Total de aulas ({allDataLessons.length})</span>
          </div>
          <table>
            <thead>
              <tr>
                <th scope="col">Aulas</th>
                <th scope="col">Data de inicio</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <br />
            <tbody>
              {allDataLessons?.map(({ id, name, date_lesson }) => (
                <>
                  <tr key={styleHyphenFormat(id)}>
                    <td>{name}</td>
                    <td>{date_lesson}</td>
                    <td></td>
                  </tr>
                  <div className="break"></div>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </Col>
    </Row>
  );
}
