import {useContext} from "react";
import {UserContext} from "../../contexts/userContext";

import Header from "../../components/Header";

function Dashboard() {
  const {signOut} = useContext(UserContext);

    return (
      <div >
        <Header />
        <h1>Dashboard</h1>
        <button onClick={() => signOut()}>Deslogar</button>
      </div>
    );
  }
  
  export default Dashboard;