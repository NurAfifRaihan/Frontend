import styled from "styled-components";

const StyledHero = styled.div`
  .container {
    margin: 1rem;
  }

  .hero {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .hero__left {
    margin-bottom: 1rem;
  }

  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    margin-bottom: 1rem;
  }

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
  }

  .hero__button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 20px;
    background-color: #4361ee;
    color: #fff;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    /*
     * Nothing TODO Here.
     * We dont change style Hero.
     */
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 3rem auto;
    }

    .hero {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    .hero__left {
      flex-basis: 40%;
    }

    .hero__right {
      flex-basis: 40%;
    }
  }
`;

export default StyledHero;
