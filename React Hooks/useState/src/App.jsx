import "./App.css";
import React, { useState } from "react";
import ButtonModal from "./components/ButtonModal";

const App = () => {
  let [ativo, setAtivo] = useState(true);
  let [dados, setDados] = useState({ nome: "Alcides", idade: 26 });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, possuiFaculdade: ativo });
  }

  return (
    <>
      <button onClick={handleClick}>
        {ativo ? "Oi, sou um botão do bem! :)" : "Sou um botão do mal! >:("}
      </button>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{String(dados.possuiFaculdade)}</p>
      <ButtonModal />
    </>
  );
};

export default App;
