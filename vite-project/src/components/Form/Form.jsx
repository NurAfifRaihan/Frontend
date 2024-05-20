import styles from "./Form.module.css"
import { useState } from 'react';
import { nanoid } from "nanoid"; 
import Alert from "../alert/alert";

function Form(props){
    const{movies, setMovies } = props;

    const [title, setTitle] = useState('');
  const [date, setYear] = useState('');

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === ""){
        setIsTitleError(true);
    }
    else if (date === ""){
        setIsTitleError(false)
        setIsDateError(true);
    }else{
        const movie= {
            id: nanoid(),
            title: title,
            year: date,
            type: "Movie",
            poster: "https://picsum.photos/300/400"
        }
        setMovies([...movies, movie]);
        setIsDateError(false);
        setIsTitleError(false);
    }
    // yang ingin di inpup
    
    
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
                        <button type="submit" className={styles.form__button}>
                        Submit
                        </button>
                </form>
            </div>
                
            </section>
        </div>
  )
}

export default Form


                