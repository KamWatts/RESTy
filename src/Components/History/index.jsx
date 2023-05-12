import React from 'react';

function History({ history, setResponse }) {
  return (
    <div>
      <h3>History</h3>
      <ul>
        {history.map((h, i) => (
          <li key={i}>
            <button onClick={() => setResponse(h.response)}>
              {h.method} {h.url}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
