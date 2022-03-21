import styled from 'styled-components';

export const StyledModal = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85vw;
  height: 25vh;
  background-color: #ff9f1c;
  border-radius: 0.6rem;
  z-index: 1010;
  @media (min-width: 768px) {
    width: 600px;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 1rem 2rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    @media (min-width: 768px) {
      font-size: 1.4rem;
    }

    span {
      color: #ffffff;
    }
    button {
      width: 100%;
      border-color: transparent;
      background-color: #ffffff;
      padding: 0.2rem 0.3rem;
      border-radius: 0.31rem;
      font-size: 0.9rem;
      font-weight: 700;
      :hover {
        opacity: 0.95;
        transform: scale(1.01);
      }
      @media (min-width: 768px) {
        font-size: 1.4rem;
      }
    }
  }
`;

export const StyledModalOverlay = styled.section`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3333;
`;
