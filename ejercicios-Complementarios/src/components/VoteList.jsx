import React, { useState } from 'react';
import VoteOption from '../components/VoteOption';

const VoteList = () => {
  // Estado para los votos de cada tecnología [cite: 28]
  const [votes, setVotes] = useState({
    React: 0,
    Vue: 0,
    Angular: 0
  });

  // Cálculo del total de personas que han votado [cite: 13]
  const totalVotes = votes.React + votes.Vue + votes.Angular;

  // Función para manejar el incremento de votos [cite: 29]
  const handleVote = (tech) => {
    setVotes({
      ...votes,
      [tech]: votes[tech] + 1
    });
  };

  // Requerimiento: Botón de "Reiniciar votos" para volver a cero [cite: 17, 26, 30]
  const resetVotes = () => {
    setVotes({ React: 0, Vue: 0, Angular: 0 });
  };

  // Función para calcular el porcentaje individual 
  const getPercentage = (count) => {
    if (totalVotes === 0) return 0;
    return ((count / totalVotes) * 100).toFixed(1);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Sistema de Votación UDB</h2>
      {/* Visualización de cantidad de personas que han votado [cite: 13] */}
      <p>Total de votos registrados: <strong>{totalVotes}</strong></p>

      <div className="options-container">
        {/* Lista de VoteOption  */}
        <VoteOption 
          name="React" 
          percentage={getPercentage(votes.React)} 
          onVote={() => handleVote('React')} 
        />
        <VoteOption 
          name="Vue" 
          percentage={getPercentage(votes.Vue)} 
          onVote={() => handleVote('Vue')} 
        />
        <VoteOption 
          name="Angular" 
          percentage={getPercentage(votes.Angular)} 
          onVote={() => handleVote('Angular')} 
        />
      </div>

      <button 
        onClick={resetVotes} 
        style={{
          marginTop: '20px',
          width: '100%',
          padding: '12px',
          backgroundColor: '#d9534f',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Reiniciar votos
      </button>
    </div>
  );
};

export default VoteList;