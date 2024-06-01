
import Hero from "../components/Hero/hero"
import Movies from "../components/Movies/Movies"
import Form from "../components/Form/Form"
import React from 'react';
import { useState } from "react"
import data from "../utils/constants/data"
import Counter from "../components/counter"

function Home (){
    const  [movies, setMovies] = useState(data);
    return(
        <>
            <main>
                <Hero />
                <Movies movies={movies} setMovies={setMovies}></Movies>
                <Form movies={movies} setMovies={setMovies}/>
            </main>
        </>
    )

    // return (
    //     <Counter />
    // )
}

export default Home