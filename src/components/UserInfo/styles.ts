import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  gap: 0.5rem;

  span {
    font-size: 14px;
  }
`;

export const Avatar = styled.div`
  background: #121212;
  padding: 0.8rem 0.9rem;
  border-radius: 50%;
  border: 2px solid var(--yellow-dark);
`;
