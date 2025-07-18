import "./App.css";

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  function totalGasto() {
    let valor = 0;
    dados.compras.forEach((i) => {
      let preco = Number(i.preco.replace("R$ ", ""));
      valor += preco;
    });
    return valor;
  }

  let totalReais = totalGasto();

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        <span style={dados.ativa ? { color: "green" } : { color: "red" }}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total Gasto: R${totalGasto()}</p>
      <p
        style={totalReais > 10000 ? { display: "block" } : { display: "none" }}
      >
        Eita! Sua compra é acima de R$10000!
      </p>
    </div>
  );
};

export default App;
