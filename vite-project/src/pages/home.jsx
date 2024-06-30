
import Hero from "../components/Hero/hero"
import Movies from "../components/Movies/Movies"
import Form from "../components/Form/Form"
import { useState } from "react"
import data from "../utils/constants/data"
import styled from "styled-components";

const StyledH2 = styled.h2`
margin-bottom: 1rem;
  font-size: 2.44rem;
  color: #4361ee;
`;

function Home (){
    return(
        <>
            <main>
                <Hero />
                <StyledH2>
                <h2></h2>
                </StyledH2>
                <Movies ></Movies>
            </main>
        </>
    )

    // return (
    //     <Counter />
    // )
}

export default Home