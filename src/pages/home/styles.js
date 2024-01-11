import styled from "styled-components";
import Background from '../../assets/background.svg'

export const Container = styled.div`
    background-image: url(${Background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    gap: 40px;
`

export const Image = styled.img`

    margin: 36px;

`


export const ContainerItens = styled.div`
    width: 414px;
    height: 100vh;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);

    border-radius: 61px 61px 0px 0px;

    display: flex;
    flex-direction: column;
    align-items: center;

`

export const H1 = styled.h1`
   
    font-size: 42px;
    font-weight: bold;
    line-height: 40px;
    color: #FFFFFF;
    margin-bottom: 80px;
    margin-top: 40px;
`

export const InputLabel = styled.label`
    
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    color: #EEEEEE;
    margin-right: 244px;


`

export const Input = styled.input`
    width: 342px;
    height: 58px;
    padding: 15px 20px 15px 25px;
    border-radius: 14px;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color: #FFFFFF;
    box-shadow: 0px 4px 4px 0px #00000040;
    background: #FFFFFF40;
    border: none;
    outline: none;
    margin-bottom: 20px;

    &::placeholder{
        color: #FFFFFF;
    }
`
export const Button = styled.button`
    width: 342px;
    height: 74px;
    border-radius: 14px;
    background: #000000CC;
    color: #fff;
    font-size: 17px;
    font-weight: bold;
    line-height: 28px;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }
`


