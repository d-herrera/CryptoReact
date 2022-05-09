import styled from '@emotion/styled'
import { ReactElement } from 'react';

const HeaderContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    background-color: #121212;
    @media (max-width: 830px) {
        width:100%;
        }
`
const Image = styled.img`
    max-width: 80px;
    margin-bottom: 20px;
    // order:2;
    @media (max-width: 885px) {
       // order:1;
    }
`;


const Price = styled.p`
    font-size: 18px;
    text-align: center;
    margin:0px;
/*     width:30%;
    flex-basis: 100%; */
    justify-self: flex-end;
    // order:1;$
    @media (max-width: 885px) {
       // order:2;
  }
    span {
        font-weight: 700;
    }
`

type CardHeaderProps = {
    imageUrl:string
    price:string
}

const CardHeader = ({imageUrl, price}:CardHeaderProps):ReactElement=>(
    <HeaderContainer>
        <Image src={`https://cryptocompare.com/${imageUrl}`} alt='Logo Crypto' />
        <Price>PRECIO ACTUAL: <span>{price}</span></Price>
</HeaderContainer>
)

export default CardHeader;