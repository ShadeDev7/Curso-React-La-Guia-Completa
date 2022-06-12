import { useState } from "react";

import styled from "@emotion/styled";

const Label = styled.label`
    color: #ffffff;
    display: block;
    font-family: "Lato", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`;

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 4px;
`;

const useSelectCurrency = (label, currencies) => {
    const [currency, setCurrency] = useState("");

    const SelectCurrency = () => (
        <>
            <Label>{label}</Label>

            <Select value={currency} onChange={e => setCurrency(e.target.value)}>
                <option value="">-- Seleccionar --</option>
                {currencies.map(({ id, name }) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </Select>
        </>
    );

    return [currency, SelectCurrency];
};

export default useSelectCurrency;
