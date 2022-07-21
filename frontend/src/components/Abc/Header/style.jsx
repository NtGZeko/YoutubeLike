import styled from "styled-components";

export default styled.header`
  height: 5vh;
  width: 100%;
  position: fixed;
  position: absolute;
  top: 0;
  background-color: var(--tertiary-color);
  box-shadow: -1px 6px 10px -1px rgba(0, 0, 0, 0.37);
  border-bottom: 1px solid var(--white);
  .flex {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: var(--white);
    font-size: 1rem;

    width: 12%;
  }
  h1 {
  }
`;
