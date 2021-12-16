import styled from "styled-components";
import { shade } from "polished";

export const Btn = styled.button`
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
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

export const BtnSecond = styled.button`
  background: var(--sign-in) !important;
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  padding: 12px 34px 12px 17px;

  border-radius: 100px;
  border: 0;

  &:focus {
    border: 0 !important;
    box-shadow: transparent !important;
    outline: 0 !important;
  }

  svg {
    margin-right: 8px;
    font-size: 22px;
    color: var(--yellow-dark);
  }
`;
