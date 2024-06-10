import styled from "styled-components";
const StyledNavbar = styled.div`
  background-color: #d143ee;
  padding: 1rem;
  color: #f9e2e2;

  /* Small Screen */
  @media (max-width: 767px) {
    nav {
      display: flex;
      flex-direction: column;
    }

    h1 {
      font-size: 2.4rem;
      margin-bottom: 1rem;
    }

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
    }

    li {
      margin-bottom: 1rem;
    }

    Link {
      text-decoration: none;
      color: #fff;
    }
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      font-size: 2.4rem;
      margin-bottom: 0;
    }

    ul {
      display: flex;
      flex-direction: row;
      list-style: none; /* Perbaikan */
    }

    li {
      margin: 0 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    /* 
     * Nothing to do here.
     * We haven't styled Navbar.
     */
  }
`;

export default StyledNavbar
