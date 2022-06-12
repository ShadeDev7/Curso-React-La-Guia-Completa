import styled from "@emotion/styled";

import { formatDate } from "../helpers";

const Container = styled.div`
    color: #ffffff;
    font-family: "Lato", sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 16px;
`;

const Image = styled.img`
    display: block;
    width: 125px;
`;

const Price = styled.p`
    font-size: 20px;
    margin-bottom: -5px;

    span {
        font-weight: 700;
    }
`;

const Text = styled.p`
    span {
        font-weight: 700;
    }
`;

const LastUpdate = styled.p`
    margin-top: -5px;
    text-align: center;

    span {
        display: block;
        font-weight: 700;
    }
`;

const Result = ({ result, currencies }) => {
    const { IMAGEURL, PRICE, LOWDAY, HIGHDAY, CHANGEPCT24HOUR, LASTUPDATE } = result;
    const { currency, criptoCurrency } = currencies;

    return (
        <Container>
            <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt={`Imagen ${criptoCurrency}`} />
            <div>
                <Price>
                    Precio actual:{" "}
                    <span>
                        {PRICE.toFixed(2)} {currency}
                    </span>
                </Price>
                <Text>
                    Precio más bajo del día:{" "}
                    <span>
                        {LOWDAY.toFixed(2)} {currency}
                    </span>
                </Text>
                <Text>
                    Precio más alto del día:{" "}
                    <span>
                        {HIGHDAY.toFixed(2)} {currency}
                    </span>
                </Text>
                <Text>
                    Variación de las últimas 24hs: <span>{CHANGEPCT24HOUR.toFixed(2)}%</span>
                </Text>
                <LastUpdate>
                    Última actualización: <span>{formatDate(Number(LASTUPDATE + "000"))} GMT-3</span>
                </LastUpdate>
            </div>
        </Container>
    );
};

export default Result;
