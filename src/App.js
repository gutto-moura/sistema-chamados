import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import UserProvider from "./contexts/userContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <Routes />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
