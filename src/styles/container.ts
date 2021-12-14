import styled from "styled-components";
import { Container as Containers } from "reactstrap";

export const Container = styled(Containers)`
  @media screen and (min-width: 575px) {
    max-width: 570px;
  }

  @media screen and (min-width: 768px) {
    max-width: 740px;
  }

  @media screen and (max-width: 992px) {
    max-width: 960px;
  }
  @media screen and (min-width: 1320px) {
    max-width: 1180px;
  }
`;
