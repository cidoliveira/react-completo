import "./App.css";

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const App = () => {
  return (
    <section>
      <ul>
        {produtos.map((item) => {
          let valor = Number(item.preco.replace("R$", ""));
          return (
            <li style={{ listStyleType: "none" }}>
              <div
                style={
                  valor > 1500 ? { display: "block" } : { display: "none" }
                }
              >
                <h1>{item.nome}</h1>
                <p>Preço: {item.preco}</p>
                {item.cores.map((cor) => {
                  return (
                    <p
                      style={{
                        background: `${cor}`,
                        color: "white",
                        padding: "10px",
                        margin: "15px",
                      }}
                    >
                      {cor}
                    </p>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default App;
