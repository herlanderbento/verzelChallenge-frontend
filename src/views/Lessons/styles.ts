import styled from "styled-components";

export const Section = styled.div`
  padding: 70px 15px;
  background: var(--black);

  .section {
    background: var(--black);

    .title {
      margin: 20px 0 30px;
      color: var(--gray);
    }

    table {
      width: 100%;
      thead {
        border-top: 1px solid var(--background);
        border-bottom: 1px solid var(--background);
      }
      th {
        color: var(--gray);
        font-weight: 500;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
      }

      td {
        padding: 1rem 2rem;
        border: 0;
        flex-grow: 1;
        background: var(--background);
        &:first-child {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        &:last-child {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
        &.deposit {
          color: var(--green);
        }
        &.withdraw {
          color: var(--red);
        }
      }

      .break {
        margin: 5px 0;
      }
    }
  }

  .align-items-stretch {
    align-items: stretch;
  }
  .dashboard-info {
    margin-bottom: 60px;

    .info {
      display: flex;
      align-self: center;
      gap: 15px;
    }

    .h4-info {
      font-size: 24px;
      font-weight: 600;
      color: var(--gray);

      span {
        color: var(--green-light);
      }
    }
  }

  form {
    margin-bottom: 60px;
    label {
      font-size: 16px;
      margin-bottom: 20px;
      color: var(--gray);
    }
  }
  .input-form {
    background: var(--background);

    input[type="date"] {
      padding: 6px 0;
    }
  }
`;
