import styled from "styled-components";

export const ContainerForm = styled.div`
    background-color: #fff;
    border-radius: 10px;

    form{
        display: flex;
        flex-direction: column;
        max-width: 400px;
        padding: .8em;
    }
    form > label{
        margin-bottom: 10px;
    }

    form > input{
        padding: 7px;
        margin-bottom: 10px;
        font-family: inherit;
        border: 1px solid #808080;
        border-radius: 5px;
    }

    form > button{
        padding: 10px;
        margin-bottom: 10px;
        margin-top: 20px;
        font-family: inherit;
        font-weight: bold;
        max-width: 300px;

        background-color: #0000FF;
        color: white;
        border: 1px solid #0000FF;
        border-radius: 12px;
    }

    form > button:hover{
        background-color: transparent;
        color: #0000FF;
        border: 2px solid #0000FF;
    }
`