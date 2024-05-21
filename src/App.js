import React from "react";
import "./App.css";
function App() {
  return (
    <div className="container">
      <form>
        <h1>Digite seus dados abaixo</h1>
        <label>Nome</label>
        <input type="text" />
        <label>Telefone</label>
        <input type="tel" />
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}
export default App;