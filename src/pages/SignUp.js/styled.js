import styled from "styled-components";
import {Link} from "react-router-dom";

export const ContainerHome = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #121212;
`
export const CampoLogin = styled.div`
    heigth: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    flex-direction: column;
    background-color: #EAEAEC;
`
export const AreaLogo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #181c2e;

    img{
        padding: 20px;
        widht: 150px;
        height: 130px;
    }
`
export const Formulario = styled.form`
    margin-top: 1.5em;
    width: 90%;
    display: flex;
    flex-direction: column;


    h1{
        text-align: center;
        margin-bottom: 0.5em;
    }

    input{
        margin-bottom: 20px;
        height: 35px;
        border: 0;
        widht: 400px;
        padding: 0 10px;
    }
    button{
        height: 35px;
        border: 0;
        border-radius: 7px;
        color: #fff;
        font-size: 1em;
        background-color: #181c2e;
        margin-bottom: 20px;
    }
`
export const LinkCadastro = styled(Link)`
    margin-bottom: 20px;
    font-size: 1em;
    font-weight: 700;
    cursor: pointer;
`