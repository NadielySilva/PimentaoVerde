import React from "react";

//importing style
import styled from "styled-components";

const PrimaryOutlinedMedium = styled.button`
    font-family: 'Fredoka', sans-serif;
    font-size: 1em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #0d4740;
    width: 12vw;
    height: 8vh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 2px solid #0d4740;
    border-radius: 0.9vh 0.5vw;
    background-color: transparent;
`;

const PrimaryOutlinedMediumBtn = ({children, type, onClick, name, href, buttonStyle, buttonSize}) =>{
    return(
        <PrimaryOutlinedMedium onClick={onClick} type={type} name={name} href={href}>
            {children}
        </PrimaryOutlinedMedium>
    )
};

export default PrimaryOutlinedMediumBtn;