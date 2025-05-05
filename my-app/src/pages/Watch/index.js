import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "./Watch.module.css"

function Watch() {
    return(
        <>
        <Header />
        <Container>
            <section className={styles.watch}>
                <h1>Assistir</h1>
                <iframe width="854" height="482" src="https://www.youtube.com/embed/2y1qW_aH0gQ?list=PLnex8IkmReXyNgtea8ly0Pn7Kk7Kavn9v" title="Curso de React JS Aula 08 Criar Rotas e Páginas, React Router DOM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
        </Container>
        <Footer />
        
        </>
    )

}

export default Watch