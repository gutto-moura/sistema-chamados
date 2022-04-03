import {useState} from "react";
import {ContainerForm} from "./styled";
import {Content} from "../../components/Header/styled"
import Header from "../../components/Header";
import Title from "../../components/Title";

import firebase from "../../services/firebaseConnection";
import { FcBusinessman } from "react-icons/fc";
import { toast } from "react-toastify"

export default function Customers(){
    //const {user} = useContext(userContext);
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCNPJ] = useState('');
    const [endereco, setEndereco] = useState('');

    async function handleAdd(e){
        e.preventDefault()
        if(nomeFantasia !== '' || cnpj !== '' || endereco !== ''){
            await firebase.firestore().collection('customers')
            .add({
                nomeFantasia: nomeFantasia,
                cnpj:cnpj,
                endereco:endereco
            }).then(() => {
                setNomeFantasia('')
                setCNPJ('')
                setEndereco('')
                toast.success("Empresa cadastrada");
            }).catch((error) => {
                console.log(error);
                toast.info("Dados inválidos");
            })
        }else{
            toast.error("Preencha todos os campos")
        }
    }

    return(
        <div>
            <Header />
            <Content>
                <Title name = "Novo cliente">
                        <FcBusinessman size={30}/> 
                </Title>

            <ContainerForm>
                <form onSubmit={handleAdd}>
                    <label>Nome fantasia</label>
                    <input type = "text" value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} />
                    <label>CNPJ</label>
                    <input type = "text" value={cnpj} onChange={(e) => setCNPJ(e.target.value)} />
                    <label>Endereço</label>
                    <input type = "text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                    <button type="submit" >SALVAR</button>
                </form>
            </ContainerForm>
        </Content>
        </div>
    )
}