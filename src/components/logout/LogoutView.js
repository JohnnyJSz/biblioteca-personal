import useAuthContext from "../../hooks/UseAuthContext";
import SmallCard from '../UI/smallCard';
import { Container } from "./styledComponents";

const LogoutView = () => {
  const { logout } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <Container>
      <h1>Cerrar sesión</h1>
      <h3>¿Quieres cerrar sesión?</h3>
      <SmallCard onClick={handleClick}>Cerrar sesión</SmallCard>
    </Container>
  );
};

export default LogoutView;
