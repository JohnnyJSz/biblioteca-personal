import useAuthContext from "../../hooks/UseAuthContext";
import SmallCard from '../UI/smallCard';

const LogoutView = () => {
  const { logout } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <h1>Cerrar sesión</h1>
      <h3>¿Quieres cerrar sesión?</h3>
      <SmallCard onClick={handleClick}>Cerrar sesión</SmallCard>
    </div>
  );
};

export default LogoutView;
