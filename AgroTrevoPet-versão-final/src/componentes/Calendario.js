import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendario.css';

const Calendario = () => {
  const [date, setDate] = useState(new Date()); 
  const [appointments, setAppointments] = useState([]); 

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleAddAppointment = () => {
    const name = prompt('Digite o nome do animal:');
    if (!name) {
      alert('Nome é obrigatório!');
      return;
    }

    const time = prompt('Digite o horário do agendamento (ex: 14:00):');
    if (!time) {
      alert('Horário é obrigatório!');
      return;
    }

    setAppointments([...appointments, { date: date.toDateString(), name, time }]);
  };

  const handleEditAppointment = (index) => {
    const newName = prompt('Edite o nome do pet:', appointments[index].name);
    const newTime = prompt('Edite o horário do agendamento:', appointments[index].time);
    if (newName && newTime) {
      const updatedAppointments = [...appointments];
      updatedAppointments[index] = { ...updatedAppointments[index], name: newName, time: newTime };
      setAppointments(updatedAppointments);
    }
  };

  const handleDeleteAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="calendar-container">
      <h2>Calendário</h2>
      <Calendar onChange={handleDateChange} value={date} />
      <p>Data selecionada: {date.toDateString()}</p>

      <button onClick={handleAddAppointment}>Adicionar Agendamento</button>

      <h4>Agendamentos:</h4>
      <ul>
        {appointments
          .filter((appt) => appt.date === date.toDateString())
          .map((appt, index) => (
            <li key={index}>
              {appt.time} - {appt.name}
              <button onClick={() => handleEditAppointment(index)}>Editar</button>
              <button onClick={() => handleDeleteAppointment(index)}>Excluir</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Calendario;