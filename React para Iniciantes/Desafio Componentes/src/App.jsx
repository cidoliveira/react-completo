import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Produtos from "./components/Produtos";

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const { pathname } = window.location;

const App = () => {
  if (pathname == "/produtos") {
    return (
      <>
        <Header />
        <Produtos />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Home />
      </>
    );
  }
};

export default App;
