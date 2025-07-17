import { useState } from "react";
import "../styles/form.css";

function ClientForm({ onAddClient }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [observation, setObservation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setError("Nome e telefone são obrigatórios!");
      return;
    }

    if (!/^\d{10,11}$/.test(phone)) {
      setError("Telefone deve ter 10 ou 11 dígitos.");
      return;
    }

    onAddClient({ name, phone, observation });
    setName("");
    setPhone("");
    setObservation("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="client-form">
      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <label htmlFor="name">Nome*</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o nome"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Telefone*</label>
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
          placeholder="Digite apenas números"
          maxLength="11"
        />
      </div>

      <div className="form-group">
        <label htmlFor="observation">Observação</label>
        <textarea
          id="observation"
          value={observation}
          onChange={(e) => setObservation(e.target.value)}
          placeholder="Observações (opcional)"
        />
      </div>

      <button type="submit" className="submit-btn">
        Cadastrar
      </button>
    </form>
  );
}

export default ClientForm;