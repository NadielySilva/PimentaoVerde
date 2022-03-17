import React from "react";

//importing style
import styled from "styled-components";

const PrimaryTransparentSmall = styled.button`
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
    border: none;
    background-color: transparent;
`;

const PrimaryTransparentSmallBtn = ({children, type, onClick, name, href, buttonStyle, buttonSize}) =>{
    return(
        <PrimaryTransparentSmall onClick={onClick} type={type} name={name} href={href}>
            {children}
        </PrimaryTransparentSmall>
    )
};

export default PrimaryTransparentSmallBtn;