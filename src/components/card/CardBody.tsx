import styled from '@emotion/styled'
import { ReactElement } from 'react'
import { ArrowDownIcon, ArrowUpIcon, VariationIcon } from '../../assets/icons'

const Details = styled.div`
    align-items: center;
    box-sizing: border-box;
    border:1px;
    border-style:solid;
    border-color: #121212 #121212 #121212 #121212;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 2rem;
    @media (max-width: 830px) {
        flex-direction: column;

  }
    // order:3;
    & > p {
        display: flex;
        color:#d8d8d8;
        align-items: center;
        //gap:15px;
        line-height: 1.3rem;
        justify-content: center;
        

    }


    & > div{
        //width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
`
const Item = styled.div`
    justify-content: flex-start;
    //gap: 15px;
    &  p{
        margin-top: 10px;
    }
`

const PriceBold=styled.span`
       display: block;
    font-weight: 700;
    margin-top: 5px;
`

type CardBody = {
    highDay:string;
    lowDay:string
    changePtc24Hour:string
}


const CardBody=({highDay,lowDay, changePtc24Hour}:CardBody):ReactElement=>(
    <Details>
        <Item>
            <ArrowUpIcon /> 
            <p>mas alto del dia <PriceBold>{highDay}</PriceBold></p>
        </Item>
        <Item>
            <ArrowDownIcon />
            <p>mas bajo del dia <PriceBold>${lowDay}</PriceBold></p>
        </Item>
        <Item>
            <VariationIcon />
            <p>variacion <PriceBold>${changePtc24Hour}</PriceBold></p>
        </Item>
    </Details>
)

export default CardBody;