import StyledFooter from "./Footer.styled"

function Footer(){
    /**
     * menggunakan style yang sudah di import   
     * memanggilnya menggunakan expresion
     */
    return(
        <StyledFooter>
            <footer>
                <h2 >Movie App</h2>
                <p >Create by Lurking Choco</p>
            </footer>
        </StyledFooter>
    )
}

export default Footer