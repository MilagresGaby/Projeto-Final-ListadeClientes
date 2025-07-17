import { useState, useEffect } from "react";
import ClientForm from "./components/ClientForm";
import ClientList from "./components/ClientList";
import "./styles/global.css";

function App() {
  const [clients, setClients] = useState(() => {
    const saved = localStorage.getItem("clients");
    return saved ? JSON.parse(saved) : [];
  });
  const [activeTab, setActiveTab] = useState("register");

  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(clients));
  }, [clients]);

  const addClient = (newClient) => {
    setClients([...clients, { ...newClient, id: Date.now() }]);
  };

  const clearAllClients = () => {
    if (confirm("Tem certeza que deseja apagar todos os clientes?")) {
      setClients([]);
    }
  };

  return (
    <div className="app">
      <div className="tabs">
        <button
          onClick={() => setActiveTab("register")}
          className={activeTab === "register" ? "active" : ""}
        >
          Cadastrar
        </button>
        <button
          onClick={() => setActiveTab("list")}
          className={activeTab === "list" ? "active" : ""}
        >
          Ver Clientes
        </button>
      </div>

      {activeTab === "register" ? (
        <ClientForm onAddClient={addClient} />
      ) : (
        <ClientList clients={clients} onClearAll={clearAllClients} />
      )}
    </div>
  );
}

export default App;