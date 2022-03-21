import styled from 'styled-components';

export const StyledMenu = styled.section`
  background-color: white;
  padding: 3rem;
  font-size: 1.1rem;
  border-radius: 0.6rem;
  box-shadow: 20px 20px 26px -20px rgba(66, 68, 90, 1);
  width: 85vw;
  @media (min-width: 768px) {
    max-width: 35rem;
  }

  form {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    h1 {
      letter-spacing: 0.06rem;
      margin-bottom: 2rem;
      font-size: 1.8rem;
    }

    div {
      margin-bottom: 2rem;
      width: 100%;
      display: flex;
      flex-direction: column;

      label {
        font-size: 0.9rem;
        margin-bottom: 0.35rem;
      }

      select {
        border-color: transparent;
        background-color: #ffecd1;
        border-radius: 0.312rem;
        padding: 0.1rem 0.3rem;
        font-size: 0.85rem;
      }
    }

    button {
      width: 100%;
      border-color: transparent;
      background-color: #ff9f1c;
      padding: 0.2rem 0.3rem;
      border-radius: 5px;
      font-size: 1rem;
    }
  }
`;
