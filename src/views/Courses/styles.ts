import styled from "styled-components";
import { Card } from "reactstrap";

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 40px 15px;
  position: sticky;
  background: var(--black);

  .active {
    border-color: var(--borders);
    display: flex;
  }

  .align-items-stretch {
    align-items: stretch !important;
  }

  .modules-items {
    height: 100vh;
    overflow-y: scroll;
    // margin-bottom: 50px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CardItems = styled(Card)`
  padding: 12px 15px 0;
  background: var(--background);
  border: 4px solid transparent;
  border-radius: 8px;
  cursor: pointer;

  .d-flex {
    align-items: flex-start;
    gap: 16px;
  }

  .icon svg {
    color: var(--yellow-dark);
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

export const CourseContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 15px;

  .tab-pane {
    justify-content: center;
    .row {
      width: 100%;
    }
  }

  .course-header {
    text-align: right;
  }
`;

export const VideoBg = styled.video`
  width: 100%;
`;

export const CardCourseItems = styled(Card)`
  background: var(--background);
  border: 0;
  width: 100%;
  height: 100%;

  .description {
    padding: 20px;

    h2 {
      font-size: 18px;
      line-height: 28px;
      margin-bottom: 10px;
      color: var(--gray);
    }

    .date {
      padding: 10px 0;
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        font-size: 14px;
      }
    }
  }
`;
