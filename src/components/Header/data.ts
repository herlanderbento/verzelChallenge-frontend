import { v4 as uuid } from "uuid";

export const allData = [
  {
    id: uuid(),
    route: `/`,
    menu: "Home",
  },
  {
    id: uuid(),
    route: `/courses`,
    menu: "Calendário das aulas",
  },
];
