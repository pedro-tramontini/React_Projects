import styles from "./CardSection.module.css"

function CardSection({ children }) {
    return(
        <section className={styles.cardsSection}>
            { children }
        </section>
    )
}

export default CardSection