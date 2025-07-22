import "./App.css";
import React, { useEffect, useState } from "react";
import ButtonModal from "./components/ButtonModal";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const preferido = localStorage.getItem("preferido");
    if (preferido) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${preferido}`)
        .then((response) => response.json())
        .then((data) => setProduto(data));
    }
  }, []);

  function fetchNotebook() {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/notebook`)
      .then((response) => response.json())
      .then((data) => {
        setProduto(data);
        localStorage.setItem("preferido", "notebook");
      });
  }

  function fetchSmartphone() {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/smartphone`)
      .then((response) => response.json())
      .then((data) => {
        setProduto(data);
        localStorage.setItem("preferido", "smartphone");
      });
  }

  return (
    <>
      <button onClick={fetchNotebook}>Notebook</button>
      <button onClick={fetchSmartphone}>Smartphone</button>
      {produto && (
        <>
          <h1>{produto.nome}</h1>
          <h2>R${produto.preco}</h2>
          <p>{produto.descricao}</p>
          <img src={produto.fotos[0].src} alt="" />
        </>
      )}
    </>
  );
};

export default App;
