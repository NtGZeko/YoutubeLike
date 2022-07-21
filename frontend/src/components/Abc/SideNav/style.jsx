import styled from "styled-components";

export default styled.nav`
  margin-top: 5vh;

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
    font-size: 1.3em;
    padding: 1rem 0.6rem;
  }
  .logo {
    line-height: 0;
  }
  .link {
    display: flex;
    font-size: 1.3em;
    color: var(--white);
    padding: 1rem 0.6rem;
    gap: 10px;
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    border-right: 4px solid transparent;
  }
  .link:hover {
    border-right: 4px solid var(--white);
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    background-color: rgb(45, 51, 89);
  }
  .link_text {
    white-space: nowrap;
    font-size: 1em;
  }
`;
