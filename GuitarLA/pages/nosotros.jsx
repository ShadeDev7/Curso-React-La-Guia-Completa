import Image from "next/image";

import Layout from "../components/Layout";

import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
    return (
        <Layout page="Nosotros">
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.content}>
                    <Image src="/img/nosotros.jpg" alt="Sobre Nosotros" width={600} height={450} layout="responsive" />

                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit tortor et
                            bibendum fringilla. Vestibulum ut ultrices nisl. Etiam laoreet ipsum et pharetra porttitor.
                            Integer ligula arcu, luctus ac sollicitudin at, semper gravida lectus. Aenean pharetra dui
                            vitae orci eleifend auctor eu id elit. In venenatis turpis ac nibh pharetra, vitae sodales
                            est tempus. Maecenas justo est, suscipit a enim ut, consectetur sagittis ante.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit tortor et
                            bibendum fringilla. Vestibulum ut ultrices nisl. Etiam laoreet ipsum et pharetra porttitor.
                            Integer ligula arcu, luctus ac sollicitudin at, semper gravida lectus. Aenean pharetra dui
                            vitae orci eleifend auctor eu id elit. In venenatis turpis ac nibh pharetra, vitae sodales
                            est tempus. Maecenas justo est, suscipit a enim ut, consectetur sagittis ante.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Nosotros;
