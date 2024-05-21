import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/container";
function Layout ({children}){
    return(
        <>
            <Navbar />
                <main>
                    <Container>{children}</Container>
                </main>
            <Footer/>
        </>
    )
}

export default Layout