import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import erro404 from './erro404.png';
import styles from "./PageNotFound.module.css"

function PageNotFound() {
    return(
        <>
        <Header />
        <Container>
            <section className={styles.PageNotFound}>
                <h1>Ops! Conteúdo não localizado!</h1>
                <img src={erro404} alt="Logo de Página não localizada"></img>
            </section>
        </Container>
        <Footer />
        </>
    );
}

export default PageNotFound;