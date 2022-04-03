import {useState, useEffect, useContext} from "react";
import Header from "../../components/Header"
import Title from "../../components/Title"
import firebase from "../../services/firebaseConnection";
import {UserContext} from "../../contexts/userContext";
import {FcAddRow} from "react-icons/fc";
import {Content} from "../../components/Header/styled"
import {Container, FormContainer} from "./styled"

export default function New(){

    const [customers, setCustomers] = useState([])
    const [load, setLoad] = useState(true);
    const [customerSelected, setCustomerSelected] = useState(0);


    const [assunto, setAssunto] = useState("Suporte");
    const [status, setStatus] = useState("Aberto");
    const [complemento, setComplemento] = useState()

    const {user} = useContext(UserContext);

    useEffect(() => {
        async function loadCustomer(){
            await firebase.firestore().collection('customers')
            .get()
            .then((snapshot) => {
                let lista = [];
                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        nomeFantasia: doc.data().nomeFantasia
                    })
                })
                if(lista.length === 0){
                    setCustomers([{ id:'1', nomeFantasia:'FREELA' }])
                    setLoad(false);
                    return;
                }

                setCustomers(lista)
                setLoad(false);

            }).catch((err) => {
                console.log(err)
                setLoad(false);
                setCustomers([{ id:'1', nomeFantasia:'' }])
            })
        }
        loadCustomer();
    })
    function handleOption(e){
        setStatus(e.target.value)
    }


    function novoCadastro(e){
        e.preventDefault();

        alert("CADASTROU");
    }

    function handleCustomers(e){
        //PEGANDO O CLIENTE - customers[e.target.value];
        //PEGANDO O INDEX - e.target.value
        setCustomerSelected(e.target.value);

    }

    return(
        <div>
            <Header />
           <Content>
               <Title name = "Novo chamado">
                   <FcAddRow size={25} />
                </Title>

                <Container>
                    <FormContainer onSubmit={novoCadastro}>
                        <label>Cliente</label>
                        {load ? (<input type = "text" disabled={true} value="carregando..." /> )
                        :(<select value = {customerSelected} onChange={handleCustomers}>
                            {customers.map((item, index) => {
                                return(
                                    <option key={item.id} value={index}>
                                        {item.nomeFantasia}
                                    </option>
                                )
                            })}
                        </select>)}
                        <label>Assunto</label>
                        <select value={assunto} onChange = {(e) => setAssunto(e.target.value)}>
                            <option  value="suporte">Suporte</option>
                            <option value="Visita técnica">Visita técnica</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>
                        <label>Status</label>
                        <div>
                            <input type="radio" 
                                name="radio" 
                                value="Aberto" 
                                onChange={handleOption} 
                                checked={status === "Aberto"} /> 
                                <span>Em aberto</span>
                            <input type="radio" 
                                name="radio" 
                                value="Progresso" 
                                onChange={handleOption} 
                                checked={status === "Progresso"} /> 
                                <span>Em progresso</span>
                            <input type="radio"  
                                name="radio" 
                                value="Atendido" 
                                onChange={handleOption} 
                                checked={status === "Atendido"} /> 
                                <span>Atendido</span>
                        </div>
                        <label>Complemento</label>
                        <textarea type = "text" 
                        placeholder = "Descreva seu chamado (opcional)" 
                        value = {complemento}
                        onChange={(e) => setComplemento(e.target.value)} />

                        <button type="submit">Registrar</button>    
                   </FormContainer>
                </Container>
           </Content>
        </div>
    )
}