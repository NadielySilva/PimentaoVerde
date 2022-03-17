import React from "react";

//importing style
import styled from "styled-components";

const PrimaryOutlinedSmall = styled.button`
    font-family: 'Fredoka', sans-serif;
    font-size: 1em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #0d4740;
    width: 4vw;
    height: 7.2vh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 2px solid #0d4740;
    border-radius: 50%;
    background-color: transparent;
`;

const PrimaryOutlinedSmallBtn = ({children, type, onClick, name, href, buttonStyle, buttonSize}) =>{
    return(
        <PrimaryOutlinedSmall onClick={onClick} type={type} name={name} href={href}>
            {children}
        </PrimaryOutlinedSmall>
    )
};

export default PrimaryOutlinedSmallBtn;