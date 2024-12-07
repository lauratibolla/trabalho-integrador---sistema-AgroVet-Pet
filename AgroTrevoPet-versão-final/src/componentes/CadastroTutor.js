import React from 'react';
import './CadastroTutor.css';

const CadastroTutor = ({ onNavigate }) => {
  return (
    <section className="container">
      <h2>Cadastro do Tutor</h2>
      <form>
        <div>
          <label>Nome</label>
          <input type="text" placeholder="Digite o nome completo" required />
        </div>
        <div>
          <label>Endereço</label>
          <input type="text" placeholder="Digite o endereço" required />
        </div>
        <div>
          <label>Telefone</label>
          <input type="interger" placeholder="(00) 00000-0000" required />
        </div>
        <div>
          <label>Email</label>
          <input type="text" placeholder="exemplo@email.com" not required />
        </div>
        <div>
          <label>CPF</label>
          <input type="interger" placeholder="000000000-00" required />
        </div>
        <div>
          <button onClick={() => onNavigate('home')}>Confirma</button>
        </div>
      </form>
    </section>
  );
};

export default CadastroTutor;
