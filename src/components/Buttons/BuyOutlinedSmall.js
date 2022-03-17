import React from "react";

//importing style
import styled from "styled-components";

const BuyOutlinedSmall = styled.button`
    font-family: 'Fredoka', sans-serif;
    font-size: 1em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #f97a1d;
    width: 4vw;
    height: 7.2vh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 2px solid #f97a1d;
    border-radius: 50%;
    background-color: transparent;
`;

const BuyOutlinedSmallBtn = ({children, type, onClick, name, href, buttonStyle, buttonSize}) =>{
    return(
        <BuyOutlinedSmall onClick={onClick} type={type} name={name} href={href}>
            {children}
        </BuyOutlinedSmall>
    )
};

export default BuyOutlinedSmallBtn;