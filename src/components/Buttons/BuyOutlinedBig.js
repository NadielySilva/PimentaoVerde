import React from "react";

//importing style
import styled from "styled-components";

const BuyOutlinedBig = styled.button`
    font-family: 'Fredoka', sans-serif;
    font-size: 1em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #f97a1d;
    width: 25vw;
    height: 8vh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 2px solid #f97a1d;
    border-radius: 0.9vh 0.5vw;
    background-color: transparent;
`;

function BuyOutlinedBigBtn({ children, type, onClick, name, href, buttonStyle, buttonSize }) {
    return (
        <BuyOutlinedBig onClick={onClick} type={type} name={name} href={href}>
            {children}
        </BuyOutlinedBig>
    );
}

export default BuyOutlinedBigBtn;