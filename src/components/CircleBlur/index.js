import * as React from "react"
import styled, { keyframes } from 'styled-components'

export function CircleBlur({ blur, color, size, top, left, animationName, keyFrame }) {

    if (!blur) {
        blur = 200;
    }

    if (!color) {
        color = "blue";
    }

    if (!size) {
        size = "300px";
    }

    if (!top) {
        top = "50%";
    }

    if (!left) {
        left = "50%";
    }


    const spin = keyframes`
${keyFrame}
    `;



    const Circle = styled.span`
        content: " ";
        display: block;
        position: relative;
        z-index: 1;
        border-radius: 100%;
        animation: ${spin} linear infinite alternate 6s;
        filter: blur(${blur}px);
        background-color: ${color};
        width: ${size}px;
        height: ${size}px;
        top: ${top};  
        left: ${left};   
    `
    return <Circle className="circle" />

}