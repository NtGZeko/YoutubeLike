import styled from "styled-components";

export default styled.nav`
  /* .animate {
    background-color: #da902f;
    width: 20%;
  } */
  .sidebar {
    background-color: rgb(114, 127, 222);
    color: white;
    height: 100vh;
  }
  a {
    text-decoration: none;
  }
  .routes {
    color: var(--white);
  }
  .top_section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.6rem;
  }
  .logo {
    line-height: 0;
  }
  .link {
    display: flex;
    color: var(--white);
    gap: 10px;
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    border-right: 4px solid transparent;
  }
  .link:hover {
    border-right: 4px solid var(--white);
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    background-color: rgb(45, 51, 89);
  }
`;
