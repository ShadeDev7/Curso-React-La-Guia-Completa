import Link from "next/link";

import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.content}`}>
                <nav className={styles.navigation}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/tienda">Tienda</Link>
                </nav>

                <p className={styles.by}>
                    Hecho con <span>♥</span> por GuitarLA
                </p>
            </div>
        </footer>
    );
};

export default Footer;
