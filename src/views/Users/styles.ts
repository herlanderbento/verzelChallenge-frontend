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
        padding: 0.2rem 2rem;
        text-align: left;
        line-height: 3rem !important;
      }
      td {
        padding: 0.8rem 2rem;
        border: 0;
        background: var(--background);
        &:first-child {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        &:last-child {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }

        &:nth-child(3) {
          width: 220px;
          margin-right: 0;
          text-align: center;
          button {
            background: var(--sign-in) !important;
            font-size: 16px;
            font-weight: 600;
            color: var(--text);
            padding: 12px;
            margin: 0 auto;
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
          }
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
  }
`;
