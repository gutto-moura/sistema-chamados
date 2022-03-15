import { useContext } from "react";
import { UserContext } from "../../contexts/userContext"
import { FcSettings, FcTodoList, FcPortraitMode } from 'react-icons/fc';
import avatar from "../../assets/avatar.png"

import { ContainerHome, ContainerImg, Links} from "./styled";


export default function Header(){
    const { user } = useContext(UserContext)

    return(
        <ContainerHome>
            <ContainerImg>
                <img src={user.avatarUrl === null ? avatar : user.avatarUrl } alt = "foto de avatar" />
            </ContainerImg>
            <Links to="/dashboard"> <FcTodoList size={25} /> Chamados</Links>
            <Links> <FcPortraitMode size={25} /> Clientes</Links>
            <Links> <FcSettings size={25} /> Configurações</Links>
        </ContainerHome>
    )
}