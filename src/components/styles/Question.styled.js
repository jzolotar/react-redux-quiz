import styled from 'styled-components';

export const StyledQuestion = styled.section`
  background-color: #ffffff;
  width: 90vw;
  padding: 1rem;
  border-radius: 0.31rem;
  @media (min-width: 768px) {
    max-width: 50rem;
  }

  p {
    text-align: right;
    color: #228b22;
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
  h1 {
    margin: 1rem 0;
    @media (min-width: 768px) {
      font-size: 1.4rem;
      text-align: center;
    }
  }

  button.answer {
    border-color: transparent;
    width: 100%;
    background-color: #8ecae6;
    padding: 0.25rem;
    text-align: center;
    border-radius: 0.31rem;
    margin-bottom: 0.5rem;
    transition: all 0.5s ease-in-out;
    font-weight: 700;

    :hover {
      background-color: #219ebc;
    }
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  button.next {
    margin-top: 1rem;
    width: 100%;
    border-color: transparent;
    background-color: #ffbf69;
    padding: 0.2rem 0.3rem;
    border-radius: 0.31rem;
    font-size: 0.9rem;
    font-weight: 700;
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;
