import React from 'react';
import './Contrato.css';

const Contrato = ({ onNavigate }) => {
  return (
    <section className="container">
      <h2>Contratar pacotes</h2>
      <form>
        <div>
          <label>Código do tutor</label>
          <input type="text" placeholder="Digite o código do tutor" required />
        </div>
        <div>
          <label>Código do animal</label>
          <input type="text" placeholder="Digite o código do animal" required />
        </div>
        <div>
          <label>Tipo do pacote</label>
          <select id="tipoPacote">
            <option value="-">Selecione o tipo do pacote</option>
            <option value="unitario">Unitário</option>
            <option value="semestral">Semestral</option>
            <option value="mensal">Mensal</option>
          </select>
        </div>
        <div>
          <label>Número de sessões executadas</label>
          <input type="number" placeholder="Digite o número de sessões executadas" required />
        </div>
        <div>
          <label>Número de dias para execução</label>
          <input type="number" placeholder="Digite o número de dias para execução" required />
        </div>
        <div>
          <label>Data de início</label>
          <input type="date" placeholder="centro" required />
        </div>
        <div>
          <label>Data de fim</label>
          <input type="date" placeholder="centro" required />
        </div>
        <div>
          <label>Valor</label>
          <input type="text" placeholder="Digite o valor" />
        </div>
        <div>
          <button onClick={() => onNavigate('home')}>Confirma</button>
        </div>
      </form>
    </section>
  );
};

export default Contrato;
