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
      <h1>Log out</h1>
      <h3>Do you want to finish session?</h3>
      <SmallCard onClick={handleClick}>Log out</SmallCard>
    </Container>
  );
};

export default LogoutView;
