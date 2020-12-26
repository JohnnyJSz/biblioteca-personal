import useAuthContext from "../../hooks/UseAuthContext";

const LogoutView = () => {
  const { logout } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <h3>Esto es la LOGOUT</h3>
      <button onClick={handleClick}>Cerrar Sesión</button>
    </div>
  );
};

export default LogoutView;
