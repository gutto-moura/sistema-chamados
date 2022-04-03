import {createContext, useState, useEffect} from "react";
import firebase from "../services/firebaseConnection";
import { toast } from 'react-toastify';


export const UserContext = createContext({});

function UserProvider({children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    function loadStorage(){
        const storageUser = localStorage.getItem("SistemaCadastro");

        if(storageUser){
            setUser(JSON.parse(storageUser))
            setLoading(false);
        }

        setLoading(false);
    }

    loadStorage()
    }, [])

    async function signUp(email, password, nome){
        setLoadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (value) => {
            let uid = value.user.uid;

            await firebase.firestore().collection('users')
            .doc(uid).set({
                nome: nome,
                avatarUrl: null
            })
            .then(() => {
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    avatarUrl: null
                }
                setUser(data)
                storageUser(data)
                setLoadingAuth(false)
                toast.success('Bem-vindo a plataforma!')
            })
        }).catch((error) => {
            console.log(error);
            toast.error('Usuario ou senha incorreta')
            setLoadingAuth(false)
        })
    }

    async function signIn(email, password){
        setLoadingAuth(true);

        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value) => {
            let uid = value.user.uid
            const userProfile = await firebase.firestore().collection('users')
            .doc(uid)
            .get()
            let data = {
                uid: uid,
                nome: userProfile.data().nome,
                avatarUrl: userProfile.data().avatarUrl,
                email: value.user.email
            }
            setUser(data)
            storageUser(data)
            setLoadingAuth(false)
            toast.success('Bem-vindo de volta')
        }).catch((error) => {
            console.log(error)
            setLoadingAuth(false)
            toast.error('Dados invalidos ou em branco')
        })
    }
    
    function storageUser(data){
        localStorage.setItem("SistemaCadastro", JSON.stringify(data));
    }
    
    async function signOut(){
        await firebase.auth().signOut();
        localStorage.removeItem("SistemaCadastro");
        setUser(null);
    }
    return(
        <UserContext.Provider value={
            {signed: !!user, user, loading, signUp, signOut, signIn, loadingAuth, setUser, storageUser}
            }>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;