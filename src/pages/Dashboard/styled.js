import styled from "styled-components";
import {Link} from "react-router-dom";


export const ContainerChamados = styled.div`
    border-radius: 5px;
    padding: .8em;
    background-color: #fff;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    span{
        margin-bottom: 20px;
        font-weight: bold;
    }
`
export const ContainerLink = styled(Link)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border: 1px solid red;
    border-radius: 5px;
    text-decoration: none;


    `
export const Tabela = styled.table`
    background-color: #fff;
    margin-top: 20px;
    border-radius: 10px;
    border-collapse: collapse;
    table-layout: fixed;
    border: 1px solid #ccc;
    width: 100%;
    padding: 0;

    tr{
        border: 1px solid #ddd;
        padding: .35em;
    }
    th,td{
        padding: .62em;
        text-align: center;
    }
    span{
        padding: 5px;
        color: #fff;
        background-color: green;
        border-radius: 3px;
    }
    th{
        font-size: .85em;
        letter-spacing: .1em;
        text-transform: uppercase;
    }
    button{
        border: 0;
        padding: 5px;
        margin-right: 4px;
        align-items: center;
        display: inline-block;
        border-radius: 5px;
    }
`
