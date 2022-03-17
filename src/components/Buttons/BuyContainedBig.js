import React from "react";

//importing style
import styled from "styled-components";

const BuyContainedBig = styled.button`
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
    border-radius: 0.9vh 0.5vw;
    background-color: #ffaf74;
`;

const BuyContainedBigBtn = ({children, type, onClick, name, href, buttonStyle, buttonSize}) =>{
    return(
        <BuyContainedBig onClick={onClick} type={type} name={name} href={href}>
            {children}
        </BuyContainedBig>
    )
};

export default BuyContainedBigBtn;