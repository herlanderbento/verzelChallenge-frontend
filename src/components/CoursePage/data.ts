import { v4 as uuidV4 } from "uuid";

export const allDataModules = [
  {
    //id: 1,
    id: `0080c03e-9439-4cd1-aa7b-853f28ddf74d`,
    name: `Projeto Frontend`,
  },
  {
    //id: 2,
    id: `dda392c4-36bd-4878-9dde-06067685e23b`,
    name: `Projeto Backend`,
  },
  {
    //id: 3,
    id: `40ce95ef-2e7a-45a3-90ae-99491a47c527`,
    name: `Projeto Mobile`,
  },
];

export const allDataLessons = [
  {
    id: uuidV4(),
    module_id: `0080c03e-9439-4cd1-aa7b-853f28ddf74d`,
    name: `Apresentação do ReactJS`,
    modules: [
      {
        id: `0080c03e-9439-4cd1-aa7b-853f28ddf74d`,
        name: `Projeto Frontend`,
      },
    ],
  },
  {
    id: uuidV4(),
    module_id: `0080c03e-9439-4cd1-aa7b-853f28ddf74d`,
    name: `Criação de componente login`,
    modules: [
      {
        id: `0080c03e-9439-4cd1-aa7b-853f28ddf74d`,
        name: `Projeto Frontend`,
      },
    ],
  },
  {
    id: uuidV4(),
    module_id: `0080c03e-9439-4cd1-aa7b-853f28ddf74d`,
    name: `Finalização do projecto`,
    modules: [
      {
        id: `0080c03e-9439-4cd1-aa7b-853f28ddf74d`,
        name: `Projeto Frontend`,
      },
    ],
  },

  {
    id: uuidV4(),
    module_id: `dda392c4-36bd-4878-9dde-06067685e23b`,
    name: `Projeto NodeJS `,
    modules: [
      {
        id: `dda392c4-36bd-4878-9dde-06067685e23b`,
        name: `Projeto Backend`,
      },
    ],
  },

  {
    id: uuidV4(),
    module_id: `40ce95ef-2e7a-45a3-90ae-99491a47c527`,
    name: `Apresentação do React-Native`,
    modules: [
      {
        id: `40ce95ef-2e7a-45a3-90ae-99491a47c527`,
        name: `Projeto mobile`,
      },
    ],
  },
  {
    id: uuidV4(),
    module_id: `40ce95ef-2e7a-45a3-90ae-99491a47c527`,
    name: `Flutter`,
    modules: [
      {
        id: `40ce95ef-2e7a-45a3-90ae-99491a47c527`,
        name: `Projeto Mobile`,
      },
    ],
  },
];
