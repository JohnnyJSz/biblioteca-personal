import React, { useState } from "react";
import HomeView from "./HomeView";

import useAuthContext from "../../hooks/UseAuthContext";

import { MAGIC_WORD } from "../../config/access/MagicWord";

const Home = () => {
  const [magicWord, setMagicWord] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const { login } = useAuthContext();

  function handleSubmit(event) {
    event.preventDefault();
    if (magicWord === MAGIC_WORD) {
      login();
    } else {
      setLoginMessage("Palabra mágica incorrecta, vuelve a intentarlo.");
    }
  }

  function handleInputChange(event) {
    setMagicWord(event.target.value);
    setLoginMessage("");
  }
  return (
    <HomeView
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      magicWord={magicWord}
      loginMessage={loginMessage}
    />
  );
};

export default Home;
