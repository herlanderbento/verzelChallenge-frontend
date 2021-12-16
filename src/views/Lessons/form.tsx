import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Col, Row } from "reactstrap";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { styleHyphenFormat } from "../../utils";
import { Select } from "./styles";

export function Form() {
  const [allDataModules, setAllDataModules] = useState([]);
  const [name, setName] = useState("");
  const [dateLesson, setDateLesson] = useState("");
  const [moduleId, setModuleId] = useState("");

  useEffect(() => {
    async function fetchAllModules() {
      try {
        const { data } = await api.get("modules");

        setAllDataModules(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllModules();
  }, []);

  async function handleFormOnSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      dateLesson,
      moduleId,
    };

    try {
      const response = await api.post("/lessons", data);

      console.log(response);

      toast.success("Aula cadastrado com sucesso👌");
    } catch (err) {
      toast.error("Falha ao cadastrar aula 🤯");
      console.error(err);
    }

    console.log(data);
  }

  return (
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
                value={dateLesson}
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
                name={moduleId}
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
  );
}
