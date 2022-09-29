import React from "react";
import styled, { css } from "styled-components";

const AreaCard = styled.div`
display: grid;
align-items: center;

`

const ImCard = styled.img`
position: absolute;
width: 60px;
height: 60px;
left: 21px;
top: 29.27px;
`
const ImCard2 = styled.img`
position: absolute;
width: 60px;
height: 60px;
left: 687px;
top: 29.27px;
`
const ImCard3 = styled.img`
position: absolute;
width: 60px;
height: 60px;
left: 354px;
top: 29.27px;
`
const Vet = styled.div`
position: absolute;
width: 0px;
height: 83.53px;
left: 302px;
top: 17px;
border: 1px solid rgba(73, 46, 21, 0.15);
`
const Vet2 = styled.div`
position: absolute;
width: 0px;
height: 83.53px;
left: 620px;
top: 17px;
border: 1px solid rgba(73, 46, 21, 0.15);
`
const Tititle = styled.h2`
position: absolute;
width: 104px;
height: 22px;
left: 99px;
top: 8px;

/* H3-20 */

font-family: 'Lilita One';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 22px;
/* identical to box height, or 110% */

text-transform: uppercase;

/* Título */

color: rgba(29, 6, 5, 0.9);

`
const SubT = styled.h3`
position: absolute;
width: 170.06px;
height: 39px;
left: 99px;
top: 35px;

font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
/* or 120% */


/* Texto */

color: rgba(29, 6, 5, 0.69);

opacity: 0.6;
`
const Car = styled.div`
display: grid;
`
export default function Card(){
    return(
        <>
        <AreaCard>
        <ImCard src="../img/Group.svg" />
        <Tititle className="Um">ARTESANAL</Tititle>
        <SubT>Nossas receitas são feitas com todo cuidado</SubT>
        </AreaCard>
        <Vet />
        <AreaCard>
        <ImCard2 src="../img/Group2.svg" />
        <Tititle className="Dois">Atendimento</Tititle>
        </AreaCard>
        <Vet2 />
        <AreaCard>
        <ImCard3 src="../img/Group3.svg" />
        </AreaCard>
        < />
        

    )
}