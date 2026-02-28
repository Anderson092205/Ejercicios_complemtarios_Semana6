import React from 'react';

const VoteOption = ({ name, percentage, count, onVote }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      margin: '10px 0',
      borderRadius: '8px',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#333' // Asegura que el texto sea visible
    }}>
      <div style={{ textAlign: 'left' }}>
        <h3 style={{ margin: 0, color: '#000' }}>{name}</h3>
        {/* Mostramos el porcentaje y el conteo individual [cite: 22] */}
        <p style={{ margin: '5px 0 0 0' }}>
          Participación: <strong>{percentage}%</strong>
        </p>
        <p style={{ margin: '2px 0 0 0', fontSize: '0.85rem', color: '#666' }}>
          Votos: {count}
        </p>
      </div>
      
      {/* Botón de votar [cite: 23] */}
      <button 
        onClick={onVote}
        style={{
          padding: '10px 20px',
          backgroundColor: '#004a99',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Votar
      </button>
    </div>
  );
};

export default VoteOption;