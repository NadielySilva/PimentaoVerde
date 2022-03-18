import React from "react";

import styled from "styled-components";

const Image = styled.img`
    width: 3vw;
    height: 5.4vh;
`;

const IconImg = ({child, src}) =>{

    return(
        <Image src={src}>
            {child}
        </Image>
    )
};

export default IconImg