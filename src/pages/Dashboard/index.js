import {useState, useContext} from "react";
import Title from "../../components/Title";
import { FcList, FcPlus } from "react-icons/fc";
import {Link} from "react-router-dom";
import {Content} from "../../components/Header/styled"
import Header from "../../components/Header";
import {ContainerChamados, ContainerLink, Tabela} from "./styled"

function Dashboard() {
    const [chamados, setChamados] = useState([]);
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
                <tr>
                  <td data-label="Cliente">Ale</td>
                  <td data-label="Assunto">suporte</td>
                  <td data-label="Status"><span>Em aberto</span></td>
                  <td data-label="Data Cadastro">31/03/2022</td>
                  <td data-label="#">
                    <button>
                      DELETAR
                    </button>
                    <button>
                      EDITAR
                    </button>
                  </td>
                </tr>
              </tbody>
            </Tabela>
        </Content>
      </div>
    );
  }
  
  export default Dashboard;