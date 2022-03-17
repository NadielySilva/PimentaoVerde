import React from "react";

//importing style
import styled from "styled-components";

const BuyOutlinedMedium = styled.button`
    font-family: 'Fredoka', sans-serif;
    font-size: 1em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #f97a1d;
    width: 12vw;
    height: 8vh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 2px solid #f97a1d;
    border-radius: 0.9vh 0.5vw;
    background-color: transparent;
`;

const BuyOutlinedMediumBtn = ({children, type, onClick, name, href, buttonStyle, buttonSize}) =>{
    return(
        <BuyOutlinedMedium onClick={onClick} type={type} name={name} href={href}>
            {children}
        </BuyOutlinedMedium>
    )
};

export default BuyOutlinedMediumBtn;