import React, { useState } from 'react';
import VoteOption from './VoteOption';

const VoteList = () => {
  // Estado inicial: React, Vue y Angular en CERO [cite: 28]
  const [votes, setVotes] = useState({
    React: 0,
    Vue: 0,
    Angular: 0
  });

  // Cálculo del total acumulado de los 3 [cite: 13, 14]
  const totalVotes = votes.React + votes.Vue + votes.Angular;

  // Función para incrementar votos individuales [cite: 29]
  const handleVote = (tech) => {
    setVotes({
      ...votes,
      [tech]: votes[tech] + 1
    });
  };

  // Función para reiniciar todo a cero [cite: 17, 30]
  const resetVotes = () => {
    setVotes({ React: 0, Vue: 0, Angular: 0 });
  };

  // Función para calcular porcentaje
  const getPercentage = (count) => {
    return totalVotes === 0 ? 0 : ((count / totalVotes) * 100).toFixed(1);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: 'white' }}>¿Qué Framework Prefieren como desarrollador?</h2>
      
      {}
      <div style={{ 
        backgroundColor: '#333', 
        color: '#fff', 
        padding: '10px', 
        borderRadius: '5px', 
        marginBottom: '20px' 
      }}>
        Total de personas que han votado: <strong>{totalVotes}</strong>
      </div>

      <div className="options-container">
        {/* Pasamos tanto el porcentaje como el conteo individual a cada componente */}
        <VoteOption 
          name="React" 
          count={votes.React}
          percentage={getPercentage(votes.React)} 
          onVote={() => handleVote('React')} 
        />
        <VoteOption 
          name="Vue" 
          count={votes.Vue}
          percentage={getPercentage(votes.Vue)} 
          onVote={() => handleVote('Vue')} 
        />
        <VoteOption 
          name="Angular" 
          count={votes.Angular}
          percentage={getPercentage(votes.Angular)} 
          onVote={() => handleVote('Angular')} 
        />
      </div>

      {/* Botón de reiniciar [cite: 17, 26] */}
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
        Reiniciar todos los votos
      </button>
    </div>
  );
};

export default VoteList;