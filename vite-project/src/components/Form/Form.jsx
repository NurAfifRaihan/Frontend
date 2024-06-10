import { useState } from 'react';
import { nanoid } from "nanoid";
import Alert from "../alert/alert";
import StyledForm from "./Form.styled.jsx";
import Button from '../ui/Button';

function Form(props) {
    const { movies, setMovies } = props;

    const [formData, setFormData] = useState({
        title: '',
        year: '',
        poster: '',
        type: ''
    });

    const [errors, setErrors] = useState({
        title: false,
        year: false,
        poster: false,
        type: false
    });

    const validate = () => {
        const newErrors = {
            title: formData.title === "",
            year: formData.year === "",
            poster: formData.poster === "",
            type: formData.type === ""
        };
        setErrors(newErrors);
        return !newErrors.title && !newErrors.year && !newErrors.poster && !newErrors.type;
    };

    const addMovie = () => {
        const movie = {
            id: nanoid(),
            ...formData
        };
        setMovies([...movies, movie]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            addMovie();
            setFormData({
                title: '',
                year: '',
                poster: '',
                type: ''
            });
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
        setErrors({
            ...errors,
            [id]: false
        });
    };

    return (
        <StyledForm>
            <div className="container">
                <section className="form">
                    <div className="form__left">
                        <img className="form__image" src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/65/2023/10/27/maxresdefault-2-4010764341.jpg" alt="placeholder" />
                    </div>
                    <div className="form__group">
                        <h2>Add Movie</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form__border">
                                <label htmlFor="title">Title:</label>
                                <input
                                    type="text"
                                    id="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="input"
                                />
                                {errors.title && <Alert>Title harus diisi</Alert>}
                            </div>
                            <div className="form__border">
                                <label htmlFor="year">Year:</label>
                                <input
                                    type="number"
                                    id="year"
                                    value={formData.year}
                                    onChange={handleChange}
                                    className="input"
                                />
                                {errors.year && <Alert>Year harus diisi</Alert>}
                            </div>
                            <div className="form__border">
                                <label htmlFor="poster">Poster:</label>
                                <input
                                    type="text"
                                    id="poster"
                                    value={formData.poster}
                                    onChange={handleChange}
                                    className="input"
                                />
                                {errors.poster && <Alert>Poster harus diisi</Alert>}
                            </div>
                            <div className="form__border">
                                <label htmlFor="type">Type:</label>
                                <input
                                    type="text"
                                    id="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="input"
                                />
                                {errors.type && <Alert>Type harus diisi</Alert>}
                            </div>
                            <div>
                                <Button type="submit" variant="primary" full>Submit</Button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </StyledForm>
    );
}

export default Form;
