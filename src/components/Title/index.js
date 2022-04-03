import {HomeContainer, NameTitle} from "./styled";

export default function Title({name, children}){
    return(
        <HomeContainer>
            {children}
            <NameTitle>{name}</NameTitle>
        </HomeContainer>
    )
}