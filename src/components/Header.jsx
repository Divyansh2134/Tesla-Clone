import React,{useState} from 'react';
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
  const [burgerStatus,setBurgurStatus]=useState(false);

  

  return (
    <Container>
     <a>
       <img src="images/logo.svg" alt="logo" ></img>
     </a>

     <Menu>
     <a href="!#">Model S</a>
     <a href="!#">Model 3</a>
     <a href="!#">Model X</a>
     <a href="!#">Model Y</a>
     </Menu>

     <RightMenu>
        <a href="!#">Shop</a>
        <a href="!#">TESLA ACCOUNT</a>
        <CustomMenu onClick={()=>setBurgurStatus(true)} />
        
     </RightMenu>
     <BurgerNav show={burgerStatus}>
       <CloseWrapper>
         <CustomClose onClick={()=>setBurgurStatus(false)} />
       </CloseWrapper>
       <li><a href="!#">Model S</a></li>
       <li><a href="!#">Model 3</a></li>
       <li><a href="!#">Model X</a></li>
       <li><a href="!#">Model Y</a></li>
       <li><a href="!#">Existing Inventory</a></li>
       <li><a href="!#">Used Inventory</a></li>
       <li><a href="!#">Trade-in</a></li>
       <li><a href="!#">Cybertruck</a></li>
       <li><a href="!#">Roadaster</a></li>
       <li><a href="!#">Solar Roof</a></li>
       <li><a href="!#">Solar Panels</a></li>
       <li><a href="!#">Accessories</a></li>
     </BurgerNav>
    </Container>
  )
}

export default Header;
const Container=styled.div`
min-height:60px;
display:flex;
position:fixed;
align-items:center;
justify-content:space-between;
padding: 0 20px;
top:0;
left:0;

right:0;
z-index:1;


`
const Menu=styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;
a{
  font-weight:600;
  text-transform:uppercase;
  padding: 0 10px;
  flex-wrap:nowrap;

}
@media(max-width: 768px ){
  display:none;
}
`
const RightMenu=styled.div`
display :flex;
align-items:center;
a{
  font-weight:600;
  text-transform:uppercase;
   margin:10px;
  

}
`
 const CustomMenu =styled(MenuIcon)`
 
   cursor: pointer;
  
 `

 const BurgerNav=styled.div`
 position:fixed;
top:0;
right:0;
bottom:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props => props.show ? 'translateX(0)':'translateX(100%)'};
transition: transform 0.2s ease-in;
li{
  padding:15px;
  border-bottom: 1px solid  ;
  a{
    font-weight:600;
  }

 
}
 `
 const CustomClose=styled(CloseIcon)`
 cursor:pointer;
 `

 const CloseWrapper=styled.div`
 display:flex;
 justify-content:flex-end;
 `