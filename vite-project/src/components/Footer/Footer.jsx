import styles from "./Footer.module.css";

function Footer(){
    /**
     * menggunakan style yang sudah di import   
     * memanggilnya menggunakan expresion
     */
    return(
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>Movie App</h2>
                <p className={styles.footer__author}>Create by Lurking Choco</p>
            </footer>
        </div>
    )
}

export default Footer