import * as React from "react"
import styled, { keyframes } from 'styled-components'
import useMediaQuery from '@mui/material/useMediaQuery';



export function CircleBlur({ color, keyFrame, zIndex, lg, sm, ...other }) {


    if (!color) {
        color = "blue";
    }


    const spin = keyframes`
    ${keyFrame}
    `;

    let smallSize = useMediaQuery('(max-width:640px)');


    const { size, blur, top, left } = smallSize ? sm || other : lg || other;

    const Circle = styled.span`
        content: " ";
        display: block;
        position: relative;
        z-index: ${zIndex};
        border-radius: 100%;
        animation: ${spin} linear infinite alternate 12s;
        filter: blur(${blur}px);
        background-color: ${color};
        width: ${size}px;
        height: ${size}px;
        top: ${top};  
        left: ${left};   
    `
    // const theSize = smallSize ? size / 4 : size;
    return <Circle className="circle" />

}



