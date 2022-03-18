import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";


//importing style
import styled from "styled-components";

//importing components
import PrimaryTransparentSmallBtn from '../Buttons/PrimaryTransparentSmall';

// import TinyIndicadorBtn from '../Buttons/TinyIndicator'




const StyledCarousel = styled.div`
    overflow:hidden;
`;

const StyledInner = styled.div`
    white-space: nowrap;
    transition: transform 0.3s;
`;

const StyledCarouselItem = styled.div`
    font-family: 'Fredoka', sans-serif;
    color: #0d4740;    
    height: 50vh;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;

export const CarouselItem = ({children, width}) =>{
    return(
        <StyledCarouselItem style={{ width: width }}>
            {children}
        </StyledCarouselItem>
    )
};

export const Carousel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) =>{
        if (newIndex < 0) {
            newIndex = React.Children.count(children) -1;
        }else if (newIndex >= React.Children.count(children)){
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused){
                updateIndex(activeIndex + 1);
            }
        }, 1500);

        return () =>{
            if(interval){
                clearInterval(interval);
            }
        };
    });

    const handlers = useSwipeable({onSwipedLeft: () => updateIndex(activeIndex + 1), onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return(
        <StyledCarousel {...handlers} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <StyledInner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) =>{
                    return React.cloneElement(child, {width: "100%"});
                })}
            </StyledInner>
            <div className="Indicators">
                <PrimaryTransparentSmallBtn onClick={() => {
                    updateIndex(activeIndex - 1);
                }}>
                    A
                </PrimaryTransparentSmallBtn>
                {/* {React.Children.map(children, (child, index) =>{
                    return(
                        <TinyIndicadorBtn className={`${index === activeIndex ? "active" : ""}`} onClick={() => {
                            updateIndex(index);
                        }}>
                            {index + 1}
                        </TinyIndicadorBtn>
                    )
                })} */}
                <PrimaryTransparentSmallBtn onClick={() => {
                    updateIndex(activeIndex + 1);
                }}>
                    P
                </PrimaryTransparentSmallBtn>
            </div>
        </StyledCarousel>
    );
};

export default Carousel;

//ver por quê linha 65-66 e linha 69 {...handlers} não fazem efeito