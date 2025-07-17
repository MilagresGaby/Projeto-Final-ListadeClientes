import { useState, useEffect } from "react";

function ClientList({ clients, onClearAll }) {
  const [highlightedId, setHighlightedId] = useState(null);

  useEffect(() => {
    if (clients.length > 0) {
      const lastId = clients[clients.length - 1].id;
      setHighlightedId(lastId);
      const timer = setTimeout(() => setHighlightedId(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [clients]);

  return (
    <div className="client-list">
      <div className="list-header">
        <h2>Clientes Cadastrados ({clients.length})</h2>
        {clients.length > 0 && (
          <button onClick={onClearAll} className="clear-btn">
            Limpar Todos
          </button>
        )}
      </div>

      {clients.length === 0 ? (
        <p>Nenhum cliente cadastrado.</p>
      ) : (
        <ul>
          {clients.map((client) => (
            <li
              key={client.id}
              className={`client-item ${highlightedId === client.id ? "highlight" : ""}`}
            >
              <h3>{client.name}</h3>
              <p>📞 {client.phone}</p>
              {client.observation && <p>📝 {client.observation}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ClientList;