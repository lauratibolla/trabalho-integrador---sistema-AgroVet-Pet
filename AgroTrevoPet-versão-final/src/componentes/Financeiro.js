import React from 'react';
import './Financeiro.css';

const Financeiro = ({ onNavigate }) => {
  return (
    <section className="container">
      <h2>Financeiro - Pagamento dos Clientes</h2>
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
          <label>Forma de pagamento</label>
          <select id="tipoPacote">
            <option value="-">Selecione a forma de pagamento</option>
            <option value="dinheiro">Dinheiro</option>
            <option value="cartaoD">Cartão de débito</option>
            <option value="pix">Pix</option>
          </select>
        </div>
        <div>
          <label>Status de pagamento</label>
          <select id="status">
            <option value="-">Selecione a forma de pagamento</option>
            <option value="pago">Pago</option>
            <option value="pendente">Pendente</option>
          </select>
        </div>
        <div>
          <button onClick={() => onNavigate('home')}>Confirma</button>
        </div>
      </form>
    </section>
  );
};

export default Financeiro;
