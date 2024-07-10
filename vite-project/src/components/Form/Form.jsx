import styles from "./Form.module.css";
import { useState } from 'react';
import { nanoid } from "nanoid";
import Alert from "../alert/alert";

function Form(props) {
  const { movies, setMovies } = props;

  const [title, setTitle] = useState('');
  const [date, setYear] = useState('');
  const [poster, setPoster] = useState('');
  const [type, setType] = useState('Movie');

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (title === "") {
      setIsTitleError(true);
      hasError = true;
    } else {
      setIsTitleError(false);
    }

    if (date === "") {
      setIsDateError(true);
      hasError = true;
    } else {
      setIsDateError(false);
    }

    if (poster === "") {
      setIsPosterError(true);
      hasError = true;
    } else {
      setIsPosterError(false);
    }

    if (type === "") {
      setIsTypeError(true);
      hasError = true;
    } else {
      setIsTypeError(false);
    }

    if (!hasError) {
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: type,
        poster: poster,
      };

      setMovies([...movies, movie]);

      setTitle('');
      setYear('');
      setPoster('');
      setType('Movie');
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img className={styles.form__image} src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/65/2023/10/27/maxresdefault-2-4010764341.jpg" alt="placeholder" />
        </div>
        <div className={styles.form__group}>
          <h2>Add Movie</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__border}>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={styles.input}
              />
              {isTitleError && <Alert>Title harus diisi</Alert>}
            </div>
            <div className={styles.form__border}>
              <label htmlFor="year">Year:</label>
              <input
                type="number"
                id="year"
                value={date}
                onChange={(e) => setYear(e.target.value)}
                className={styles.input}
              />
              {isDateError && <Alert>Date harus diisi</Alert>}
            </div>
            <div className={styles.form__border}>
              <label htmlFor="poster">Poster:</label>
              <input
                type="text"
                id="poster"
                value={poster}
                onChange={(e) => setPoster(e.target.value)}
                className={styles.input}
              />
              {isPosterError && <Alert>Poster harus diisi</Alert>}
            </div>
            <div className={styles.form__border}>
              <label htmlFor="type">Genre:</label>
              <input
                type="text"
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={styles.input}
              />
              {isTypeError && <Alert>Type harus diisi</Alert>}
            </div>
            <button type="submit" className={styles.form__button}>
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;



                
