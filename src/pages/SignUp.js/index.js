import { useState, useContext } from "react";
import Logo from "../../assets/logo-sistema.png";
import { ContainerHome, CampoLogin, AreaLogo, Formulario, LinkCadastro } from "./styled";
import {UserContext} from "../../contexts/userContext";

function SignUp() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signUp, loadingAuth} = useContext(UserContext)

    function handleSubmit(e){
      e.preventDefault();
      if(email !== "" && password !== "" && nome !== ""){
        signUp(email, password, nome) //Tem que ser na mesma sequencia do Context
      }
    }

    return (
      <ContainerHome>
        <CampoLogin>
          <AreaLogo>
            <img src={Logo} alt="Logo sistema"/>
          </AreaLogo>
          <Formulario onSubmit={handleSubmit}>
            <h1>Entrar</h1>
            <input type = "text"  placeholder = "Seu nome" value = {nome} onChange={(e) => setNome(e.target.value)} />
            <input type = "email"  placeholder = "email@email.com" value = {email} onChange={(e) => setEmail(e.target.value)} />
            <input type = "password"  placeholder = "*********" value = {password} onChange={(e) => setPassword(e.target.value)} />
            <button type = "submit">{ loadingAuth ? 'Carregando...' : 'Cadastrar' }</button>
          </Formulario>
          <LinkCadastro to = "/" >Já tem conta? Entre</LinkCadastro>
        </CampoLogin>
      </ContainerHome>
    );
  }
  
  export default SignUp;