import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import currencies from "../data/currencies";

import Error from "./Error";

import useSelectCurrency from "../hooks/useSelectCurrency";

const SubmitInput = styled.input`
    margin-top: 32px;
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`;

const Form = ({ setCurrencies }) => {
    const [criptoCurrencies, setCriptoCurrencies] = useState([]);
    const [error, setError] = useState(false);

    const [currency, SelectCurrency] = useSelectCurrency("Elige tu Moneda", currencies);
    const [criptoCurrency, SelectCriptoCurrency] = useSelectCurrency("Elige tu Criptomoneda", criptoCurrencies);

    useEffect(() => {
        const fetchCriptoCurrencies = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD";
            const response = await fetch(url);
            const data = await response.json();

            setCriptoCurrencies(
                data.Data.map(criptoCurrency => ({
                    id: criptoCurrency.CoinInfo.Name,
                    name: criptoCurrency.CoinInfo.FullName,
                })).sort((a, b) => (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1))
            );
        };
        fetchCriptoCurrencies();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();

        if (!currency || !criptoCurrency) {
            setError(true);

            return;
        }

        setError(false);
        setCurrencies({ currency, criptoCurrency });
    };

    return (
        <>
            {error && <Error>¡Todos los campos son obligatorios!</Error>}

            <form onSubmit={handleSubmit}>
                <SelectCurrency />
                <SelectCriptoCurrency />

                <SubmitInput type="submit" value="Cotizar" />
            </form>
        </>
    );
};

export default Form;
