import { useState, useEffect } from "react";
import Home from "./components/home";
import apiClient from "./utils/apiClient";

import "./App.css";


const getUrl = "https://reqres.in/api/users?page=2";
const postUrl = "https://reqres.in/api/users";

let user = {
  name: "Juan Diego",
  job: "Pro Gamer",
};

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    apiClient.get(getUrl).then((data) => {
      setUsuarios(data.data);
    });
    apiClient.post(postUrl, user).then((res) => console.log("POST success",res));
  }, []);
  
  if (!usuarios) {
    return <div>...Cargando usuarios</div>;
  }

  console.log("mi estado ->",usuarios);

  return (
    <>
      <div className='App'>
        <h2>Lista de usuarios</h2>
        <div style={{border: '1px solid #1B1B1B', padding: '10px'}}>
          {usuarios.map((usuario) => (
            <div key={usuario.id} style={{border: '1px solid #6D6C6D', padding: '5px', margin: '5px'}}>
              <h3>{usuario.first_name}</h3>
              <p>Email: {usuario.email}</p>
              <p>Id: {usuario.id}</p>
            </div>
          ))}
        </div>
      </div>
      <Home />
    </>
  );
}

export default App;
