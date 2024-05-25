import React from 'react';
import styled, {createGlobalStyle} from 'styled-components'


export const GlobalStyles = createGlobalStyle`
body,html {
   min-width: 100vw;
   min-height: 100vh;
   background-color: #000;
   font-family: monospace;
   font-size: 16px;
   color: #FFF;
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;
   align-items: stretch;
}
`

const Container = styled.div`
display: flex;
justify-content: left;
background: linear-gradient(
    90deg,
    rgba(0,99,255,0) 0%,
    rgba(0,99,255,1) 200px,
    rgba(0,99,255,0) 250px
);
width: 100vw;
height: 100vh;
min-height: 700px;
`

const GuitarNeck = styled.div`
width: 200px;
background: linear-gradient(
    90deg,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,0.7) 3%,
    rgba(0,0,0,0) 50%,
    rgba(0,0,0,0.7) 97%,
    rgba(0,0,0,1) 100%
),
linear-gradient(
    180deg,
    rgba(255,255,255,0.15) 0%,
    rgba(255,255,255,0) 100%
),
linear-gradient(
    80deg,
    rgba(15,4,3,1) 5%,
    rgba(55,10,7,1) 14%,
    rgba(71,24,21,1) 29%,
    rgba(55,10,7,1) 50%,
    rgba(96,51,16,1) 69%,
    rgba(71,24,21,1) 82%,
    rgba(15,4,3,1) 95%
)
;
position: relative;
border: 4px solid #000;
`

function frets() {
    const start = 3;
    const incr = 5;
    const width = 0.3;
    const shadow = 1;
    let styles = `
        rgba(0,0,0,0) ${start-width}%,
        rgba(227,225,195,1) ${start-width}%,
        rgba(162,160,120,1) ${start+width}%,
        rgba(0,0,0,1) ${start+width}%,
        rgba(0,0,0,0) ${start+width}%,
    `;

    for (let i = 0; i < 20; i += 1) {
        styles += `
        rgba(0,0,0,0) ${start + (i * incr)}%,
        rgba(100,100, 100,1) ${start + (i * incr)}%,
        rgba(255,255,255,1) ${start + (i * incr) + (width / 2)}%,
        rgba(100,100, 100,1) ${start + (i * incr) + width}%, 
        rgba(0,0,0,1) ${start + (i * incr) + width}%,
        rgba(0,0,0,0) ${start + (i * incr) + width + shadow}%,
        `
    }
    return styles
}

const GuitarFrets = styled.div`
    position: absolute;
    inset: 0; 
    background: linear-gradient(
        180deg,
        rgba(0,0,0,0) 0%,
        ${frets()}
        rgba(0,0,0,0) 100%
    );
`

const GuitarDots = styled.div`
    position: absolute;
    inset: 0; 
`

interface GuitarDotProps {
    $top: number;
    $left: number;
}

const GuitarDot = styled.div<GuitarDotProps>`
    position: absolute;
    top: ${props => props.$top}%;
    left: ${props => props.$left}%;
    border: 1px solid #222;
    outline: 1px solid #000;
    border-radius: 100%;
    background: linear-gradient(138deg, rgba(64,55,44,1) 23%, rgba(0,0,0,1) 57%);
    width: 1.5vh;
    height: 1.5vh;
    min-width: 10px;
    min-height: 10px;
`

interface GuitarStringProps {
    $number: number;
    $width: number;
    $wound: boolean;
}

const GuitarString = styled.div<GuitarStringProps>`
position: absolute;
width: ${props=> props.$width}%;
inset: 0 0 0 ${props => ((100/6) * props.$number) - 9}%;
border: 1px solid #000;
filter: drop-shadow(2px 1px 1px rgba(0, 0, 0, 0.6));
background: 
    linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%,  rgba(255, 255, 255, 0) 100%),
    ${
        props => props.$wound ?
        'repeating-linear-gradient(0deg, #000 0,  #111 1px, #777 3px, #000 4px)'
        :
        'linear-gradient(90deg, #000 0%, #444 25%, #333 75%, #000 100%)'
    };
`

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;
margin: 3.5vh 10px 0 70px;
flex-grow: 1;
max-width: 500px;
`

const Button = styled.button`
border: 1px solid #fff;
background: none;
border-radius: 0;
font-family: monospace;
color: #FFF;
padding: 0.2rem 1rem;
`

const Controls = styled.div`
display: flex;
flex-direction: row;
/* border: 1px solid rgba(0,99,255,0.4); */
border: 1px solid #fff;
padding: 10px;
`

export function App() {
  return (
  <Container>
    <GuitarNeck>
        <GuitarFrets />
        <GuitarDots>
            <GuitarDot $top={15}  $left={47} />
            <GuitarDot $top={25}  $left={47} />
            <GuitarDot $top={35}  $left={47} />
            <GuitarDot $top={45}  $left={47} />
            <GuitarDot $top={60}  $left={35} />
            <GuitarDot $top={60}  $left={60} />
            <GuitarDot $top={75}  $left={47} />
            <GuitarDot $top={85}  $left={47} />
            <GuitarDot $top={95}  $left={47} />
        </GuitarDots>
        <GuitarString $number={1} $width={2} $wound={true} />
        <GuitarString $number={2} $width={1.5} $wound={true} />
        <GuitarString $number={3} $width={1} $wound={true} />
        <GuitarString $number={4} $width={1} $wound={false} />
        <GuitarString $number={5} $width={0.75} $wound={false} />
        <GuitarString $number={6} $width={0.5} $wound={false} />
    </GuitarNeck>
    <Content>
        <Controls>
            <Button>Go!</Button>
        </Controls>
    </Content>
  </Container>
  );
}
