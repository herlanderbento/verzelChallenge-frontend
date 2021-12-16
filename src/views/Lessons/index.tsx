import { FormEvent, useEffect, useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import { Container, Button as Btn, Col, Row } from "reactstrap";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { styleHyphenFormat } from "../../utils";
import { Section, Select } from "./styles";

interface IData {
  id: string;
}

export default function Lessons() {
  const { token } = useAuth();

  const [allDataLessons, setAllDataLessons] = useState([]);
  const [allDataModules, setAllDataModules] = useState([]);
  const [name, setName] = useState("");
  const [date_lesson, setDateLesson] = useState("");
  const [module_id, setModuleId] = useState("");

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
      const response = await api.get("modules");
      setAllDataModules(response?.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAllLessons();
    fetchAllModules();
  }, []);

  async function handleFormOnSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      date_lesson,
      module_id,
    };
    try {
      const response = await api.post("/lessons/", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchAllLessons();

      toast.success("Aula cadastrado com sucesso👌");
    } catch (err) {
      toast.error("Falha ao cadastrar aula 🤯");
    }
  }

  function handleDeleteLessons(id: string) {
    // eslint-disable-next-line no-restricted-globals
    const message = confirm("Desejas eliminar esta aula?");

    if (message) {
      api
        .delete(`/lessons/${id}/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((_) => {
          toast.success("Módulo eliminado com sucesso!");
        });
    }
    fetchAllLessons();
  }

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
            <form onSubmit={handleFormOnSubmit}>
              <div className="row align-items-stretch">
                <div className="col-lg-3 col-lg-3">
                  <label>Aulas</label>

                  <Input
                    className="input-form"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digita o aula"
                    type="text"
                    required
                  />
                </div>
                <div className="col-lg-3 col-lg-3">
                  <label>Data da aulas</label>

                  <Input
                    className="input-form"
                    name="date_lesson"
                    value={date_lesson}
                    onChange={(e) => setDateLesson(e.target.value)}
                    placeholder="example@doe.com"
                    type="date"
                    required
                  />
                </div>
                <div className="col-lg-3 col-lg-3">
                  <label>Seleciona o módulo</label>
                  <Select
                    onChange={(e) => setModuleId(e.target.value)}
                    autoComplete="off"
                    className="mb-3"
                    name={module_id}
                  >
                    <option className="option">Seleciona o módulo</option>
                    {allDataModules?.map(({ id, name }) => (
                      <option value={id} key={styleHyphenFormat(id)}>
                        {name}
                      </option>
                    ))}
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
                <span>Total de aulas ({allDataLessons.length})</span>
              </div>
              <table>
                <thead>
                  <tr>
                    <th scope="col" className="pb-3">
                      Aulas
                    </th>
                    <th scope="col" className="pb-3">
                      Data de inicio
                    </th>
                    <th scope="col" className="pb-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {allDataLessons.length > 0 ? (
                    allDataLessons?.map(({ id, name, date_lesson }) => (
                      <>
                        <th className="pt-2"></th>
                        <tr key={id}>
                          <td>{name}</td>
                          <td>{date_lesson}</td>
                          <td>
                            <button onClick={() => handleDeleteLessons(id)}>
                              <AiFillDelete />
                            </button>
                            <button>
                              <AiOutlineEdit />
                            </button>
                          </td>
                        </tr>
                      </>
                    ))
                  ) : (
                    <>
                      <h2 className="text-waring">Sem nenhum dados</h2>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
