import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import { MenuWrapper } from "./styles/MenuWrapper";

const Sec = styled.section`
position: absolute;
width: 100%;
height: 545px;
left: 0px;
top: 0px;
background-image: url('../img/Banner.svg');
`
const B1 = styled.button`
border-style:none;
background-color: transparent;
align-items: center;
display: flex;
width: 27px;
height: 14.27px;
position: absolute;
left: 80%;
right: 0%;
top: 40%;
bottom: 0%;

background-image: url('../img/ifood.svg');
`;

const B2 = styled.button`
border-style:none;
background-color: transparent;
align-items: center;
display: flex;
width: 27px;
height: 27px;
position: absolute;
left: 82.4%;
right: 0%;
top: 30%;
bottom: 0%;

background-image: url('../img/instagram.svg');
`;

const B3 = styled.img`
align-items: center;
display: flex;
width: 1px;
height: 47.66px;
position: absolute;
left: 84.8%;
right: 0%;
top: 12%;
bottom: 0%;
color: #B50B04;
border: 0.5px solid #B50B04;

background-image: url('../img/Barra.svg');

`;

const B4 = styled.button`
border-style:none;
background-color: transparent;
align-items: center;
display: flex;
width: 123px;
height: 34px;
position: absolute;
left: 85.7%;
right: 0%;
top: 25%;
bottom: 0%;

background-image: url('../img/Frame.svg');
`;

const CostLogo = styled.header`
position: absolute;
width: 264.69px;
height: 35.19px;
left: 375px;
top: 14.84px;
`
const List = styled.nav`
display: flex;
position: absolute;
width: 49px;
height: 26px;
left: 701.04px;
top: 18.94px;
list-style:none;
align-items: center;
align-content: center;


`;
const A= styled.a`
//font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 25px;
color: #34201F;
margin-left:16px;
margin-right:16px;
align-items: center;
align-content: center;
align-self: center

`;

export default function Menu(){

return(
    <Sec>
    <MenuWrapper>
        <CostLogo>
        <Logo />
        </CostLogo>
        <List> 
        <A>Home</A>
        <A>Promoção</A>
        <A>Cardapio</A>
        <A>Comentarios</A>
        </List>
        <B1 />
        <B2 />
        <B3 />
        <B4 />
       
    
        
    </MenuWrapper>
    </Sec>
)
}