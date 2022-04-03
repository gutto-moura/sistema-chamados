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
    input{
        margin-bottom: .5em;
        fontsize: 1.8em;
        height: 2.5em;
        padding: .5em;
        border: none;
        border-radius: 5px;
        max-width: 600px;
        font-family: inherit;
        border: 1px solid #808080;
        border-radius: 5px;
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
    input:disabled{
        cursor: not-allowed;
    }
`
export const LabelAvatar = styled.label`
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

    span{
        z-index: 99;
        position: absolute;
        opacity:0.9;
        transition: all .5s; 
    }

    input{
        display: none;
    }

    img{
        margin-bottom: 1em;
        border-radius: 50%;
        object-fit: cover;
    }
    span:hover{
        opacity: 1;
        transform: scale(1.2);SignOut
    }
`
export const SignOut = styled.div`
    display: flex;
    margin-left: 230px;


    button{
        padding: .5em 2em;
        font-family: inherit;
        background-color: transparent;
        border-radius: 5px;
        border: 1px solid blue;
        font-weight: bold;
        transition: all .5s;
        margin-top: 20px;
    }
    button:hover{
        background-color: blue;
        color: white;
    }
`