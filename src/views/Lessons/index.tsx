/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useEffect, useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { v4 as uuidV4 } from "uuid";
import { toast } from "react-toastify";
import { Container, Col, Row, UncontrolledTooltip } from "reactstrap";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { Section, Select } from "./styles";

export default function Lessons() {
  const { token } = useAuth();
  const [allDataLessons, setAllDataLessons] = useState([]);
  const [allDataModules, setAllDataModules] = useState([]);
  const [idLesson, setIdLesson] = useState("");
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

  function handleDeleteLesson(id: string) {
    // eslint-disable-next-line no-restricted-globals

    api.delete(`/lessons/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchAllLessons();
  }

  async function handleCreateLesson(event: FormEvent) {
    event.preventDefault();

    try {
      const data = {
        name,
        date_lesson,
        module_id,
      };

      const response = await api.post("/lessons/", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchAllLessons();

      setName("");
      setDateLesson("");
      setModuleId("");

      toast.success("Aula cadastrado com sucesso👌");
    } catch (err) {
      toast.error("Falha ao cadastrar aula 🤯");
    }
  }

  async function handleUpdateLesson(event: FormEvent) {
    event.preventDefault();

    try {
      const data = {
        name,
        date_lesson,
        module_id,
      };

      const response = await api.put(`/lessons/${idLesson}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchAllLessons();

      setName("");
      setDateLesson("");
      setModuleId("");

      toast.success("Aula cadastrado com sucesso👌");
    } catch (err) {
      toast.error("Falha ao cadastrar aula 🤯");
    }
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
            <form onSubmit={idLesson ? handleUpdateLesson : handleCreateLesson}>
              <div className="row align-items-stretch">
                <div className="col-lg-4">
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
                <div className="col-lg-4">
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
                <div className="col-lg-4">
                  <label>Seleciona o módulo</label>
                  <Select
                    onChange={(e) => setModuleId(e.target.value)}
                    autoComplete="off"
                    className="mb-3"
                    name={module_id}
                  >
                    <option className="option">Seleciona o módulo</option>
                    {allDataModules?.map(({ id, name }) => (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="row">
                {idLesson ? (
                  <div className="col-lg-4">
                    <Button className="mt-1">Editar</Button>
                  </div>
                ) : (
                  <div className="col-lg-4">
                    <Button className="mt-1">Cadastrar</Button>
                  </div>
                )}
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
                    allDataLessons?.map(
                      ({ id, name, date_lesson, module_id }) => (
                        <>
                          <tr key={uuidV4()}>
                            <td>{name}</td>
                            <td>{String(date_lesson)?.substring(0, 10)}</td>
                            <td>
                              <button
                                id="Info"
                                onClick={() => handleDeleteLesson(id)}
                              >
                                <AiFillDelete />
                              </button>
                              <UncontrolledTooltip
                                placement="top"
                                target="Info"
                              >
                                Duplo click para eliminar os dados
                              </UncontrolledTooltip>
                              <button
                                onClick={() => {
                                  setName(name);
                                  setDateLesson(date_lesson);
                                  setModuleId(module_id);
                                  setIdLesson(id);
                                }}
                              >
                                <AiOutlineEdit />
                              </button>
                            </td>
                          </tr>
                          <th className="pt-2"></th>
                        </>
                      )
                    )
                  ) : (
                    <h2 className="text-waring">Sem nenhum dados</h2>
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
