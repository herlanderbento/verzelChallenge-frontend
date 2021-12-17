/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useEffect, useState } from "react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import { Container, Col, Row, UncontrolledTooltip } from "reactstrap";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { Section } from "./styles";

export default function ModulePage() {
  const { token } = useAuth();

  const [allDataModules, setAllDataModules] = useState([]);
  const [idModules, setIdModules] = useState("");
  const [name, setName] = useState("");

  async function fetchAllModules() {
    try {
      const response = await api.get("modules");
      setAllDataModules(response?.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAllModules();
  }, []);

  async function handleCreateModule(event: FormEvent) {
    event.preventDefault();

    try {
      const data = { name };
      console.log(data);
      const response = await api.post("/modules/", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchAllModules();

      setName("");

      toast.success("Módulo cadastrado com sucesso👌");
    } catch (err) {
      toast.error("Falha ao cadastrar Módulo 🤯");
    }
  }

  function handleDeleteModules(id: string) {
    // eslint-disable-next-line no-restricted-globals

    api.delete(`/modules/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchAllModules();
  }

  async function handleUpdateModule(event: FormEvent) {
    event.preventDefault();

    try {
      const data = { name };
      const response = await api.put(`/modules/${idModules}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchAllModules();

      setName("");
      setIdModules("");
      toast.success("Módulo actualizado com sucesso👌");
    } catch (err) {
      toast.error("Falha ao cadastrar Módulo 🤯");
    }
  }

  return (
    <Section>
      <Container>
        <Row className="justify-content-center">
          <Col lg="11">
            <div className="dashboard-info mb-5">
              <Title subTitle="Módulos" />
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg="11">
            <form
              onSubmit={idModules ? handleUpdateModule : handleCreateModule}
            >
              <div className="row align-items-stretch">
                <div className="col-lg-12">
                  <label>Módulos</label>

                  <Input
                    className="input-form"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digita o módulo"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="row">
                {idModules ? (
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
                <h3>Lista de módulos</h3>
                <span>Total de módulos ({allDataModules.length})</span>
              </div>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                  </tr>
                </thead>
                <br />
                <tbody>
                  {allDataModules.length > 0 ? (
                    allDataModules?.map(({ id, name }) => (
                      <>
                        <tr key={id}>
                          <td>{name}</td>
                          <td>
                            <button
                              id="Info"
                              onClick={() => handleDeleteModules(id)}
                            >
                              <AiFillDelete />
                            </button>
                            <UncontrolledTooltip placement="top" target="Info">
                              Duplo click para eliminar os dados
                            </UncontrolledTooltip>
                            <button
                              onClick={() => {
                                setName(name);
                                setIdModules(id);
                              }}
                            >
                              <AiOutlineEdit />
                            </button>
                          </td>
                        </tr>
                        <th className="pt-2"></th>
                      </>
                    ))
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
