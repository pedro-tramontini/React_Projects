import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import VideoList from "../../components/VideoList";
import { useFavoriteContext } from "../../contexts/Favorites";
import styles from "./Favorites.module.css"

function Favorites() {

    const { favorite } = useFavoriteContext()

    return(
        <>
        <ScrollToTopButton />
            <Header />
            <Container>
            <section className={styles.Favorites}>
                <h2>Meus Favoritos</h2>
                { <VideoList videos={favorite} /> }
            </section>
            </Container>
            <Footer />
        </>
    );
}

export default Favorites;