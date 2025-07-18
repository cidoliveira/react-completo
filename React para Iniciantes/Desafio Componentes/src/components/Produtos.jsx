import React from "react";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

export default function Produtos() {
  return (
    <section>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.nome}>
            {produto.nome}
            <ul>
              {produto.propriedades.map((propriedade) => (
                <li key={propriedade}>{propriedade}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
