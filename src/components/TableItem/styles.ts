import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Categoria = styled.div<{ color: string}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #ffffff;
    background-color: ${props => props.color};
`;

export const Valor = styled.div<{ color: string}>`
    color: ${props => props.color};
`;