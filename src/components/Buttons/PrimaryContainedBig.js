import React from "react";

//importing style
import styled from "styled-components";

const PrimaryContainedBig = styled.button`
    font-family: 'Fredoka', sans-serif;
    font-size: 1em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #d7e3df;
    width: 25vw;
    height: 8vh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    border-radius: 0.9vh 0.5vw;
    background-color: #0d4740;
`;

const PrimaryContainedBigBtn = ({children, type, onClick, name, href, buttonStyle, buttonSize}) =>{
    return(
        <PrimaryContainedBig onClick={onClick} type={type} name={name} href={href}>
            {children}
        </PrimaryContainedBig>
    )
};

export default PrimaryContainedBigBtn;


//Styles
// "btn-primary--contained", ok
// "btn-buy--contained", ok small | ok Big | ok big
// "btn-primary--outlined", ok
// "btn-buy--outlined", ok small | ok Big | ok big
// "btn-primary--transparent", ok


//Sizes
// "btn--Big",
// "btn--small",
// "btn--large"
