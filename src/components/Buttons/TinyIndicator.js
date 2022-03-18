import React from "react";

//importing style
import styled from "styled-components";

const TinyIndicador = styled.button`
    font-family: 'Fredoka', sans-serif;
    font-size: 1em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #0d4740;
    width: 1vw;
    height: 1.8vh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 2px solid #0d4740;
    border-radius: 50%;
    background-color: transparent;
`;

const TinyIndicadorBtn = ({children, type, onClick, name, href, buttonStyle, buttonSize}) =>{
    return(
        <TinyIndicador onClick={onClick} type={type} name={name} href={href}>
            {children}
        </TinyIndicador>
    )
};

export default TinyIndicadorBtn;