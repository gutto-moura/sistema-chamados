import { useState, useContext } from "react";
import {UserContext} from "../../contexts/userContext"
import Logo from "../../assets/logo-sistema.png";
import { ContainerHome, CampoLogin, AreaLogo, Formulario, LinkCadastro } from "./styled";



function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signIn, loadingAuth} = useContext(UserContext)

    function handleSubmit(e){
      e.preventDefault();

      if(email !== "" && password !== ""){
        signIn(email, password)
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
            <input type = "email"  placeholder = "email@email.com" value = {email} onChange={(e) => setEmail(e.target.value)} />
            <input type = "password"  placeholder = "*********" value = {password} onChange={(e) => setPassword(e.target.value)} />
            <button type = "submit">{ loadingAuth ? 'Carregando...' : 'Acessar' }</button>
          </Formulario>
          <LinkCadastro to = "/register" >Cadastre-se</LinkCadastro>
        </CampoLogin>
      </ContainerHome>
    );
  }
  
  export default SignIn;