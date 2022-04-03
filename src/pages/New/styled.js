import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: .8em;
    border-radius: 5px;
    align-items: flex-start;
    justify-content: start;
    background-color: #fff;

`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    label{
        margin-bottom: .5em;
        fontsize: 1.4em;
    }

    select{
        padding: .5em;
        font-family: inherit;
        margin-bottom: .5em;
    }
    div{
        margin-bottom: .5em;


    }
    input[type="radio"]:not(:first-child){
        margin-left: 15px;
    }

    textarea{
        margin-bottom: .5em;
        height: 105px;
        resize: none;
        font-family: inherit;
    }
    button{
        margin-top: .5em;
        height: 3em;
        max-width: 600px;
        font-family: inherit;
        font-weight: bold;
        background-color: #0000FF;
        color: white;
        border: 1px solid #0000FF;
        border-radius: 12px;
        margin-top: 10px;
    }
    button:hover{
        background-color: transparent;
        color: #0000FF;
        border: 2px solid #0000FF;
    }
`
export const AreaTexto = styled.textarea`
    
`
