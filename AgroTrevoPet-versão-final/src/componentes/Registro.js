import React from 'react';
import './Registro.css';

const Registro = ({ onNavigate }) => {
  return (
    <section className="container">
      <h2>Registro de Execução</h2>
      <form>
        <div>
          <label>Código do Pacote</label>
          <input type="number" placeholder="Digite o código" required />
        </div>
        <div>
          <label>Banho realizado</label>
          <select>
            <option value="-">Selecione o tipo banho</option>
            <option value="B">B - Banho</option>
            <option value="BTH">BTH - Banho e Tosa Higiênica</option>
            <option value="BTG">BTG - Banho e Tosa Geral</option>
            <option value="BTB">BTB - Banho e Tosa Bebê</option>
            <option value="BCU">BCU - Banho e Corte de Unha</option>
            <option value="BT">BT - Banho Terapêutico</option>
            <option value="BAP">BAP - Banho Anti Pulgas</option>
          </select>
        </div>
        <div>
          <label>Observações</label>
          <input type="text" placeholder="Observações" required/>
        </div>
        <div>
          <label>Data de Execução</label>
          <input type="date" placeholder="centro" required />
        </div>
        <div>
          <label>Serviço de Táxi</label>
          <select id="taxi">
          <option value="-">-</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>
        <div>
          <button onClick={() => onNavigate('home')}>Confirma</button>
        </div>
      </form>
    </section>
  );
};

export default Registro;
