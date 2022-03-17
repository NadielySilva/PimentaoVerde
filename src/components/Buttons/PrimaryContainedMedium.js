import React from "react";

//importing style
import styled from "styled-components";

const PrimaryContainedMedium = styled.button`
    font-family: 'Fredoka', sans-serif;
    font-size: 1em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #d7e3df;
    width: 12vw;
    height: 8vh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    border-radius: 0.9vh 0.5vw;
    background-color: #0d4740;
`;

const PrimaryContainedMediumBtn = ({children, type, onClick, name, href, buttonStyle, buttonSize}) =>{
    return(
        <PrimaryContainedMedium onClick={onClick} type={type} name={name} href={href}>
            {children}
        </PrimaryContainedMedium>
    )
};

export default PrimaryContainedMediumBtn;


//Styles
// "btn-primary--contained", ok
// "btn-buy--contained", ok small | ok medium | ok big
// "btn-primary--outlined", ok
// "btn-buy--outlined", ok small | ok medium | ok big
// "btn-primary--transparent", ok


//Sizes
// "btn--medium",
// "btn--small",
// "btn--large"
