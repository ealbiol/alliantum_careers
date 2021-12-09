import * as React from "react"
import styled, { keyframes } from 'styled-components'



export function CircleBlur({ blur, color, size, top, left, keyFrame, zIndex }) {

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
        z-index: ${zIndex};
        border-radius: 100%;
        animation: ${spin} linear infinite alternate 16s;
        filter: blur(${blur}px);
        background-color: ${color};
        width: ${size}px;
        height: ${size}px;
        top: ${top};  
        left: ${left};   
    `
    return <Circle className="circle" />

}




// import * as React from "react"
// import styled, { keyframes } from 'styled-components'
// import useMediaQuery from '@mui/material/useMediaQuery';



// export function CircleBlur({ blur, color, size, top, left, keyFrame, zIndex, smallSize }) {

//     if (!blur) {
//         blur = 200;
//     }

//     if (!color) {
//         color = "blue";
//     }

//     if (!size) {
//         size = 300;
//     }

//     if (!top) {
//         top = "50%";
//     }

//     if (!left) {
//         left = "50%";
//     }

//     if (!smallSize) {
//         smallSize = size / 2
//     }

//     const spin = keyframes`
//     ${keyFrame}
//     `;

//     const matches600 = useMediaQuery('(min-width:600px)');
//     /*
//         const [finalSize, setFinalSize] = React.useState(size);

//         // let finalSize = size;
//         React.useEffect(() => {
//             if (!matches600) {
//                 setFinalSize(smallSize)
//                 console.log("finalSize:--->", finalSize);

//             }
//         }, [matches600])
//     */

//     const [display, setDisplay] = React.useState(null);

//     const Circle = styled.span`
//         content: " ";
//         display: block;
//         position: relative;
//         z-index: ${zIndex};
//         border-radius: 100%;
//         animation: ${spin} linear infinite alternate 16s;
//         filter: blur(${blur}px);
//         background-color: ${color};
//         width: ${size}px;
//         height: ${size}px;
//         top: ${top};  
//         left: ${left};   
//     `;
//     setDisplay(<Circle className="circle" />);

//     if (!matches600) {
//         const CircleSmall = styled.span`
//             content: " ";
//             display: block;
//             position: relative;
//             z-index: ${zIndex};
//             border-radius: 100%;
//             animation: ${spin} linear infinite alternate 16s;
//             filter: blur(${blur}px);
//             background-color: ${color};
//             width: ${smallSize}px;
//             height: ${smallSize}px;
//             top: ${top};  
//             left: ${left};   
//         `;
//         setDisplay(<CircleSmall className="circle" />);
//     }
//     return display; //<Circle className="circle" />

// }