import * as React from "react"
import styled, { keyframes } from 'styled-components'

export function CircleBlur({ blur, color, size, top, left, animationName, keyFrame, animation }) {
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
    0%    {  transform: translate(0, 0) }
    33%   {  transform: scale(0.77) }
    66%   {  transform: translate(200px, 10px) }
    100%  {  transform: translate(400px, 20px) }
    `;

    const frame = {};
    frame["@keyframes " + animationName] = keyFrame;

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

    return (
        <React.Fragment>

            <span
                className="circle"
                style={{
                    filter: `blur(${blur}px)`,
                    backgroundColor: color,
                    width: `${size}px`,
                    height: `${size}px`,
                    top: top,
                    left: left,
                    animationName: animationName,
                    animation: animation
                }}></span>

        </React.Fragment>
    )
}