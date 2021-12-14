import styled from "styled-components";
import { Card } from "reactstrap";

export const Section = styled.section`
  padding: 85px 15px 120px;
  border-top: 0.9px solid var(--borders);

  .active {
    border-color: var(--borders);
    display: flex;
  }

  .align-items-stretch {
    align-items: stretch !important;
  }
`;

export const CardItems = styled(Card)`
  padding: 20px 15px;
  background: var(--gray-bg);
  border: 4px solid transparent;
  border-radius: 8px;
  cursor: pointer;

  .d-flex {
    align-items: flex-start;
    gap: 16px;
  }

  .icon-color-1 svg {
    color: var(--red-light);
  }
  .icon-color-2 svg {
    color: var(--yellow);
  }
  .icon-color-3 svg {
    color: var(--green);
  }
  .text {
    .title {
      margin-bottom: 8px;
      font-size: 16px;
      color: var(--gray);
    }

    .desc {
      color: var(--text);
      font-size: 13px;
    }
  }
`;

export const FaqItems = styled.div`
  background: var(--gray-bg);
  width: 100%;
  height: 100%;
  padding: 30px;
  border-radius: 8px;
`;
