import "./App.css";
import React, { useState } from "react";
import ButtonModal from "./components/ButtonModal";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const App = () => {
  let [ativo, setAtivo] = useState(true);
  let [dados, setDados] = useState({ nome: "Alcides", idade: 26 });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, possuiFaculdade: ativo });
  }

  const [produto, setProduto] = useState(null);

  function getApi(item) {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${item}`)
      .then((response) => response.json())
      .then((data) => setProduto(data));
  }

  let [modal, setModal] = useState(false);

  function BotaoModal() {
    return (
      <>
        <button onClick={() => setModal(!modal)}>Abrir Modal</button>

        <div
          onClick={() => setModal(false)}
          style={modal ? { display: "block" } : { display: "none" }}
          className="modal"
        >
          <button onClick={() => setModal(false)}>Fechar Modal</button>
        </div>
      </>
    );
  }
  return (
    <>
      <button onClick={handleClick}>
        {ativo ? "Oi, sou um botão do bem! :)" : "Sou um botão do mal! >:("}
      </button>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{String(dados.possuiFaculdade)}</p>
      <BotaoModal />
      <button onClick={() => getApi("tablet")}>Tablet</button>
      <button onClick={() => getApi("smartphone")}>Smartphone</button>
      <button onClick={() => getApi("notebook")}>Notebook</button>
      {produto ? (
        <>
          <h1>{produto.nome}</h1>
          <h2>{produto.descricao}</h2>
          <img src={produto.fotos[0].src} alt={produto.nome} />
        </>
      ) : null}
    </>
  );
};

export default App;
