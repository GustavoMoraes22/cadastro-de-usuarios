import styled from "styled-components";
import Background from '../../assets/background1.svg'

export const Container = styled.div`
    background-image: url(${Background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    align-items: center;
    gap: 40px;
`

export const Image = styled.img`

    margin: 30px;

`


export const ContainerItens = styled.div`
    padding: 50px 36px;
    height: 100%;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);

    border-radius: 61px 61px 0px 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    backdrop-filter:blur(45px);
    min-height: calc(100vh - 200px);

`

export const H1 = styled.h1`
   
    font-size: 42px;
    font-weight: bold;
    line-height: 40px;
    color: #FFFFFF;
    margin-bottom: 80px;
    margin-top: 40px;
`

export const Li = styled.li`
    width: 342px;
    height: 58px;
    border-radius: 14px;
    background: #FFFFFF40;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;

    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    color: #FFFFFF;
    box-shadow: 0px 4px 4px 0px #00000040;

    button{
        background: transparent;
        border: none;
        cursor: pointer;
    }

`

export const Button = styled.button`
    width: 342px;
    height: 74px;
    border-radius: 14px;
    background: transparent;
    color: #fff;
    font-size: 17px;
    font-weight: bold;
    line-height: 28px;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid #fff;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }

    img{
        transform: rotate(180deg);
    }
`


