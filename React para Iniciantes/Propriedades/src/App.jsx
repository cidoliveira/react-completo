import "./App.css";

const Titulo = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

const App = () => {
  return <Titulo texto="Opa, eu!" cor="red" />;
};

export default App;
