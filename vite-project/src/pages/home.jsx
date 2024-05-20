import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/hero"
import Movies from "../components/Movies/Movies"
import Form from "../components/Form/Form"
import { useState } from "react"
import data from "../utils/constants/data"

function Home (){
    const  [movies, setMovies] = useState(data);
    return(
        <div>
            <Navbar />
            <main>
                <Hero />
                <Movies movies={movies} setMovies={setMovies}></Movies>
                <Form movies={movies} setMovies={setMovies}/>
            </main>
            <Footer />
        </div>
    )
}

export default Home