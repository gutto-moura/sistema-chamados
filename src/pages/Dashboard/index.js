import {useState, useEffect} from "react";
import Title from "../../components/Title";
import { FcList, FcPlus, FcSearch, FcDocument } from "react-icons/fc";
import {Link} from "react-router-dom";
import {Content} from "../../components/Header/styled"
import Header from "../../components/Header";
import {ContainerChamados, ContainerLink, Tabela} from "./styled"
import firebase from "../../services/firebaseConnection";
import { format } from "date-fns";

const listRef = firebase.firestore().collection('chamados').orderBy('created', 'desc');

function Dashboard() {
    const [chamados, setChamados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false)
    const [lastDocs, setLastDocs] = useState()
  console.log(loadingMore)
  console.log()
  console.log()

    useEffect(() => {
      loadChamados();

      return() => {

      }
    }, [])

    async function loadChamados(){
      await listRef.limit(5)
      .get()
      .then((snapshot) => {
        updateState(snapshot);
      }).catch((err) => {
        console.log('Deu algum erro:', err)
      })
      setLoading(false)
    }

    async function updateState(snapshot){
      const isCollectionEmpty = snapshot.size === 0;
      if(!isCollectionEmpty){
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            assunto: doc.data().assunto,
            cliente: doc.data().cliente,
            clienteId: doc.data().clienteId,
            created: doc.data().created,
            createdFormated: format(doc.data().created.toDate(),'dd/MM/yyyy'),
            status: doc.data().status,
            complemento: doc.data().complemento
          })
        })
        const lastDoc = snapshot.docs[snapshot.docs.length -1] //Pegando o ultimo documento
        setChamados(chamados => [...chamados, ...lista])
        setLastDocs(lastDoc)
      }else{
        setIsEmpty(true)
      }

      setLoadingMore(false);
    }

    async function handleMore(){
      setLoadingMore(true);
      await listRef.startAfter(lastDocs).limit(5)
      .get()
      .then((snapshot)=>{
        updateState(snapshot)
      })
    }

    if(loading){
      return(
        <div>
          <Header />

          <Content>
            <Title name="Dashboard">
              <FcList size={25}/> 
            </Title>
            </Content>
        </div>
      )
    }
    return (
      <div>
        <Header />

        <Content>
          <Title name="Dashboard">
            <FcList size={25}/> 
          </Title>
        {chamados.length === 0 ? (
                  <ContainerChamados>
                  <span>Nenhum chamado aberto...</span>
                  <ContainerLink to="/new">
                    <FcPlus size={20} />
                    Novo Chamado
                  </ContainerLink>
                </ContainerChamados>
        ) : (
          <>
            <Link to="new">
              Novo chamado
            </Link>

          </>
        )}
          <Tabela>
              <thead>
                <tr>
                  <th scope="col">Cliente</th>
                  <th scope="col">Assunto</th>
                  <th scope="col">Status</th>
                  <th scope="col">Data Cadastro</th>
                  <th scope="col">#</th>
                </tr>
              </thead>
              <tbody>
                {chamados.map((item) => {
                  return(
                    <tr>
                    <td data-label="Cliente">{item.cliente}</td>
                    <td data-label="Assunto">{item.assunto}</td>
                    <td data-label="Status">
                      <span style={{ backgroundColor: item.status === 'Aberto' ? '#5cb85c' : '#999' }}>
                        {item.status}
                      </span>
                    </td>
                    <td data-label="Data Cadastro">{item.createdFormated}</td>
                    <td data-label="#">
                      <button>
                        <FcSearch size={20}/>
                      </button>
                      <button>
                        <FcDocument size={20}/>
                      </button>
                    </td>
                  </tr>
                  )
                })
              }
              </tbody>
            </Tabela>
            {!loadingMore && !isEmpty && <button onClick={handleMore()}>Buscar mais</button>}
            <button></button>
        </Content>
      </div>
    );
  }
  
  export default Dashboard;