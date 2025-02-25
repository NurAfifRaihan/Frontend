import styled from "styled-components";

const StyledForm = styled.div`
  .formContainer {
    margin-bottom: 1px;
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 65%;
  }

  .form__group {
    margin-bottom: 10px;
  }

  .input {
    border: 2px solid #118ab2;
    height: 35px;
  }

  label {
    margin-bottom: 10px;
  }

  .form__image {
    width: 300px;
    max-width: 100%;
    height: 300px;
    border-radius: 25px;
  }

  .formGroup p {
    color: #ef476f;
  }

  .input {
    width: 200%;
    padding: 8px;
    border: 2px solid #f46ec3;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 3px;
  }

  .form__button {
    width: 100%;
    background-color: #f15aad;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    /*
     * Nothing TODO Here.
     * We dont change style form.
     */
  }

  /* Large Screen */
  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
      margin: 1rem auto;
    }

    .form {
      margin: 0 5rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    .form__left {
      flex-basis: 50%;
    }

    .form__right {
      flex-basis: 50%;
    }
  }
`;

export default StyledForm;
