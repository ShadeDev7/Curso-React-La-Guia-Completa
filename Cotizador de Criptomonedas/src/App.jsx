import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Form from "./components/Form";
import Spinner from "./components/Spinner";
import Result from "./components/Result";

import CriptoImage from "./imgs/imagen-criptos.png";

const Container = styled.div`
    max-width: 900px;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

const Image = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 75px auto 0 auto;
    display: block;
`;

const Heading = styled.h1`
    margin: 50px 0;
    font-family: "Lato", sans-serif;
    color: #ffffff;
    text-align: center;
    font-size: 34px;
    font-weight: 700;

    &::after {
        content: "";
        width: 300px;
        height: 6px;
        background-color: #66a2fe;
        display: block;
        margin: 10px auto 0 auto;
    }
`;

function App() {
    const [currencies, setCurrencies] = useState({});
    const [result, setResult] = useState({});

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (Object.keys(currencies).length === 0) return;

        setResult({});

        const fetchData = async () => {
            setLoading(true);

            const { currency, criptoCurrency } = currencies;

            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCurrency}&tsyms=${currency}`;
            const response = await fetch(url);
            const data = await response.json();

            setResult(data.RAW[criptoCurrency][currency]);
            setLoading(false);
        };
        fetchData();
    }, [currencies]);

    return (
        <Container>
            <Image src={CriptoImage} alt="Imagen Cripto" />

            <div>
                <Heading>Cotiza tus Criptomonedas</Heading>

                <Form setCurrencies={setCurrencies} />

                {loading && <Spinner />}

                {Object.keys(result).length > 0 && <Result result={result} currencies={currencies} />}
            </div>
        </Container>
    );
}

export default App;
