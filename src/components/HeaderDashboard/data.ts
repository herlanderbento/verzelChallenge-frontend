import { v4 as uuid } from "uuid";

export const allData = [
  {
    id: uuid(),
    route: `/dashboard`,
    menu: "Dashboard",
  },
  {
    id: uuid(),
    route: `/lessons`,
    menu: "Aulas",
  },
  {
    id: uuid(),
    route: `/modules`,
    menu: "Módulo",
  },
  {
    id: uuid(),
    route: `/users`,
    menu: "Usuários",
  },
];
