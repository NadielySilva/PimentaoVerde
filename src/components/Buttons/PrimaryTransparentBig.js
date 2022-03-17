import React from "react";

//importing style
import styled from "styled-components";

const PrimaryTransparentBig = styled.button`
    font-family: 'Fredoka', sans-serif;
    font-size: 1em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #0d4740;
    width: 25vw;
    height: 8vh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
`;

const PrimaryTransparentBigBtn = ({children, type, onClick, name, href, buttonStyle, buttonSize}) =>{
    return(
        <PrimaryTransparentBig onClick={onClick} type={type} name={name} href={href}>
            {children}
        </PrimaryTransparentBig>
    )
};

export default PrimaryTransparentBigBtn;