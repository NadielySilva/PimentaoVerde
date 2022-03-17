import React from "react";

//importing style
import styled from "styled-components";

const BuyContainedSmall = styled.button`
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
    border-radius: 50%;
    background-color: #ffaf74;
`;

const BuyContainedSmallBtn = ({children, type, onClick, name, href, buttonStyle, buttonSize}) =>{
    return(
        <BuyContainedSmall onClick={onClick} type={type} name={name} href={href}>
            {children}
        </BuyContainedSmall>
    )
};

export default BuyContainedSmallBtn;