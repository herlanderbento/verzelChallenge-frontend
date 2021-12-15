import styled from "styled-components";
import { shade } from "polished";

export const Btn = styled.button`
  margin-top: 10px;
  cursor: pointer;
  width: 332px;
  height: 48px;
  border-radius: 4px;
  border: 0;
  background: var(--yellow-dark);
  color: var(--white);
  font-size: 16px;
  font-weight: bold;
  transition: 0.2s;

  padding: 10px 15px;

  &:hover {
    background: ${shade(0.2, "#eba417")};
  }
`;
