import "./App.css";
import apiClient from "./utils/apiClient";

let misUsuarios = [];

apiClient.get.then((users) =>
  users.map((u) => {
    misUsuarios.push(u);
  })
);
console.log("usuarios fetched: ", misUsuarios);

apiClient.post.then(res => console.log(res));

function App() {
  return (
    <div className='App'>
      <p>this is a simple web page</p>
      {misUsuarios.map((u) => {
        return <div key={u.id} className="box">
          <p>Nombre: {u.first_name}</p>
          <p>Email: {u.email}</p>
        </div>;
      })}
    </div>
  );
}

export default App;
