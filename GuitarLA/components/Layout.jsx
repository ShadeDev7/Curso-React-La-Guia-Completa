import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, page }) => {
    return (
        <>
            <Head>
                <title>Guitar LA - {page}</title>
            </Head>

            <Header />

            {children}

            <Footer />
        </>
    );
};

export default Layout;
