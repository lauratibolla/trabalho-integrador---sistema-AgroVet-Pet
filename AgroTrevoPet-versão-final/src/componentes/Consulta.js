import React, { useState } from 'react';
import './Consulta.css';

const Consulta = () => {

  const [tutores, setTutores] = useState([
    { id: 1, endereco: 'Rua Porto Alegre 190', telefone: '3323-7891', email: 'maria@gmail.com' },
    { id: 2, endereco: 'Av. Brasil 300', telefone: '3412-3456', email: 'joao@gmail.com' },
  ]);

  const [animais, setAnimais] = useState([
    { id: 1, idade: '2 anos', comorbidade: 'Nenhuma', infoAdicional: 'Vacinas em dia' },
    { id: 2, idade: '5 anos', comorbidade: 'Cardiopatia', infoAdicional: 'Alimentação especial' },
  ]);

  const handleDeleteTutor = (id) => {
    const confirmDelete = window.confirm('Deseja realmente excluir este tutor?');
    if (confirmDelete) {
      setTutores(tutores.filter((tutor) => tutor.id !== id));
    }
  };

  const handleEditTutor = (id) => {
    const tutorToEdit = tutores.find((tutor) => tutor.id === id);
    const novoEndereco = prompt('Digite o novo endereço:', tutorToEdit.endereco);
    const novoTelefone = prompt('Digite o novo telefone:', tutorToEdit.telefone);
    const novoEmail = prompt('Digite o novo email:', tutorToEdit.email);

    if (novoEndereco && novoTelefone && novoEmail) {
      setTutores(
        tutores.map((tutor) =>
          tutor.id === id
            ? { ...tutor, endereco: novoEndereco, telefone: novoTelefone, email: novoEmail }
            : tutor
        )
      );
    }
  };

  const handleDeleteAnimal = (id) => {
    const confirmDelete = window.confirm('Deseja realmente excluir este animal?');
    if (confirmDelete) {
      setAnimais(animais.filter((animal) => animal.id !== id));
    }
  };

  const handleEditAnimal = (id) => {
    const animalToEdit = animais.find((animal) => animal.id === id);
    const novaIdade = prompt('Digite a nova idade:', animalToEdit.idade);
    const novaComorbidade = prompt('Digite a nova comorbidade:', animalToEdit.comorbidade);
    const novaInfoAdicional = prompt('Digite a nova informação adicional:', animalToEdit.infoAdicional);

    if (novaIdade && novaComorbidade && novaInfoAdicional) {
      setAnimais(
        animais.map((animal) =>
          animal.id === id
            ? { ...animal, idade: novaIdade, comorbidade: novaComorbidade, infoAdicional: novaInfoAdicional }
            : animal
        )
      );
    }
  };

  return (
    <div className="container">
      <h1>Consulta de Tutores</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tutores.map((tutor) => (
            <tr key={tutor.id}>
              <td>{tutor.id}</td>
              <td>{tutor.endereco}</td>
              <td>{tutor.telefone}</td>
              <td>{tutor.email}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEditTutor(tutor.id)}>Alterar</button>
                <button className="delete-btn" onClick={() => handleDeleteTutor(tutor.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Consulta de Animais</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Idade</th>
            <th>Comorbidades</th>
            <th>Informação Adicional</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {animais.map((animal) => (
            <tr key={animal.id}>
              <td>{animal.id}</td>
              <td>{animal.idade}</td>
              <td>{animal.comorbidade}</td>
              <td>{animal.infoAdicional}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEditAnimal(animal.id)}>Alterar</button>
                <button className="delete-btn" onClick={() => handleDeleteAnimal(animal.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Consulta;
