import { useState, useContext } from "react";
import {UserContext} from "../../contexts/userContext"; 
import { Container, FormContainer, LabelAvatar, SignOut } from "./styled";
import Header from "../../components/Header";
import Title from "../../components/Title";
import {Content} from "../../components/Header/styled"
import { FcAutomatic, FcUpload } from "react-icons/fc";
import avatar from "../../assets/avatar.png"
import firebase from "../../services/firebaseConnection";


export default function Profile(){
    const {user, signOut, setUser, storageUser } = useContext(UserContext);
    const [nome, setNome] = useState(user && user.nome);
    const [email, setEmail] = useState(user && user.email);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imageAvatarUrl, setImageAvatarUrl] = useState(null);

    function handleFile(e){

        if(e.target.files[0]){

            const image = e.target.files[0];
            if(image.type === 'image/jpeg' || image.type === 'image/png' || image.type === 'image/jpg'){
                setImageAvatarUrl(image);
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))
            }else{
                alert("Envia uma imagem do tipo JPEG ou PNG");
                setImageAvatarUrl(null);
                return null;
            }
        }
    }

    async function handleImage(){
        const currentUid = user.uid;
        const uploadTask = await firebase.storage()
        .ref(`images/${currentUid}/${imageAvatarUrl.name}`)
        .put(imageAvatarUrl)
        .then(async () => {
            console.log("IMAGEM ENVIADA");

            await firebase.storage().ref(`images/${currentUid}`)
            .child(imageAvatarUrl.name).getDownloadURL()
            .then(async (url) => {
                let urlFoto = url;

                await firebase.firestore().collection('users')
                .doc(user.uid)
                .update({
                    avatarUrl: urlFoto,
                    nome: nome
                }).then(() => {
                    let data = {
                        ...user,
                        avatarUrl: urlFoto,
                        nome: nome
                    };
                    setUser(data);
                    storageUser(data);
                })
            })
        })
        console.log(uploadTask);
    }

    async function handleSave(e){
        e.preventDefault();
        
        if(imageAvatarUrl === null && nome !== ""){
            await firebase.firestore().collection('users')
            .doc(user.uid)
            .update({
                nome: nome
            })
            .then(() => {
                let data = {
                    ...user,
                    nome: nome
                };
                setUser(data);
                storageUser(data);
            })
        }else if(nome !== "" && imageAvatarUrl !== ""){
            handleImage();
        }
    }

    return(
        <div>
            <Header />
            <Content>
                <Title name = "Meu perfil">
                    <FcAutomatic size={30}/> 
                </Title>
                <Container>
                    <FormContainer onSubmit={handleSave}>
                        <LabelAvatar>
                            <span>
                                <FcUpload size = {30} />
                            </span>
                            <input type="file" accept="image/*" onChange={handleFile} />
                            {   avatarUrl === null ? 
                                <img src = {avatar} width="250" height="250" alt = "foto avatar" /> 
                                : 
                                <img src = {avatarUrl} width="250" height="250" alt = "foto avatar" /> 
                            }
                        </LabelAvatar>
                        
                        <label>Nome:</label>
                        <input type = "text" value={nome} onChange={(e) => setNome(e.target.value)} />
                        <label>E-mail:</label>
                        <input type = "text" value={email} disabled={true} />
                        <button type="submit">SALVAR</button>
                    </FormContainer>
                </Container>
            </Content>
            <SignOut onClick={() => signOut()}>
                <button>SAIR</button>
            </SignOut>
        </div>
    )
} 