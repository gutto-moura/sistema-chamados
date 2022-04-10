import styled from "styled-components";
import imgFundo from "../../assets/cover.png" 
import { Link } from "react-router-dom";


export const ContainerHome = styled.div`
    margin: 0; 
    padding: 0;
    width: 200px;
    background-color: white; /* MUDAR */
    position: fixed;
    height: 100%;
    overflow: auto;

    @media screen and (max-width: 700px){
        
      }
`
export const ContainerImg = styled.div`
    background-image: url(${imgFundo});
    background-color: #181C2e; /* MUDAR */
    background-position: center;
    background-repeat: no repeat;
    background-size: cover;
    height: 150px;
    padding-top: 30px;

    img{
        border-radius: 50%;
        display: block;
        margin:auto;
        width: 90px;
        height: 90px;
        -webkit-filter: drop-shadow(2px 3px 6px #121212);
        filter: drop-shadow(2px 3px 6px #121212);
        object-fit: cover;
    }

`
export const Content = styled.div`
    margin-left: 200px;
    padding: 1px 16px;
`
export const Links = styled(Link)`
    display: block;
    color: rgba(0,0,0, 0.7);
    padding: 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: ease-in-out .4s;

    svg{
        margin-right: .5em;
    }

    :hover{
        background-color: #121212;
        color: #FFF;
      }


  
    }
    `
