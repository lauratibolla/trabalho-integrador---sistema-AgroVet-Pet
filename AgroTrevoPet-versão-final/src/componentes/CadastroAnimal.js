import React from 'react';
import './CadastroAnimal.css';

const CadastroAnimal = ({ onNavigate }) => {
  return (
    <section className="container">
      <h2>Cadastro de Animal</h2>
      <form>
        <div>
          <label>Nome do tutor</label>
          <input type="text" placeholder="Digite o nome completo" required />
        </div>
        <div>
          <label>Tipo do animal</label>
          <select id="tipoAnimal">
            <option value="-">Selecione o tipo do animal</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
          </select>
        </div>
        <div>
          <label>Idade do animal</label>
          <input type="number" placeholder="Digite a idade" required />
        </div>
        <div>
          <label>Porte do animal</label>
          <select>
            <option value="-">Selecione o porte</option>
            <option value="P">P</option>
            <option value="M">M</option>
            <option value="G">G</option>
          </select>
        </div>
        <div>
          <label>Raça</label>
          <input type="text" placeholder="Digite a raça" required />
        </div>
        <div>
          <label>Informações adicionais</label>
          <input type="text" placeholder="Informações adicionais" />
        </div>
        <div>
          <button onClick={() => onNavigate('home')}>Confirma</button>
        </div>
      </form>
    </section>
  );
};

export default CadastroAnimal;
