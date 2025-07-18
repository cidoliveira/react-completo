import "./App.css";

const App = () => {
  function handleClick(event) {
    alert(`Comprou ${event.target.innerText}`);
  }
  return (
    <>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Calça</button>
    </>
  );
};

export default App;
