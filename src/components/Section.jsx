import React from 'react';
import Styled from 'styled-components';
import Fade from 'react-reveal/Fade';


function Section({title,description,leftButnText,rightBtnText,backgroundImg}) {
    
  return (
    <Wrap bgImage={backgroundImg}>
    <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        </Fade>
        <Buttons>
        <Fade bottom>
        <ButtonGroup>
            <LeftButton>
               {leftButnText}
            </LeftButton>
            { rightBtnText &&
            <RightButton>
               {rightBtnText}
            </RightButton>
            }
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
        </Fade>
        </Buttons>
        
    </Wrap>
  )
}

export default Section;

const Wrap= Styled.div`
width:100vw;
height: 100vh;
background-size:cover;
background-position:center;
backfround-repeat:no-repeat;
 background-image: url('/images/model-s.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image: ${props => `url("/images/${props.bgImage}")` };
`
const ItemText=Styled.div`
 padding-top: 15vh  ;
text-align:center;

`
const ButtonGroup =Styled.div`
 display:flex;
margin-bottom:30px;
@media (max-width:768px){
    flex-direction:column;
}
`
const LeftButton=Styled.div`
background-color:rgba(23,26,32,0.8);
color:white;
height:40px;
width:256px;
display:flex;
justify-content:center;
border-radius:100px;
align-items:center;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`
const RightButton=Styled(LeftButton)`
background-color:white;
opacity:0.65;
color:black;
`

const DownArrow=Styled.img`
 overflow-x:hideen;
height:20px;
animation:animateDown infinite 1.5s;
`
const Buttons=Styled.div`
`