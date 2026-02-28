import React from 'react';

// Props: nombre, porcentaje y la función para emitir el voto
const VoteOption = ({ name, percentage, onVote }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      margin: '10px 0',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <h3 style={{ margin: 0 }}>{name}</h3>
        {/* Requerimiento: Muestra el porcentaje de votos actuales  */}
        <p style={{ margin: '5px 0 0 0', color: '#555' }}>
          Votos: <strong>{percentage}%</strong>
        </p>
      </div>
      
      {/* Requerimiento: Botón "Votar" que incrementa la opción [cite: 23] */}
      <button 
        onClick={onVote}
        style={{
          padding: '10px 20px',
          backgroundColor: '#004a99',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Votar
      </button>
    </div>
  );
};

export default VoteOption;