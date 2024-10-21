'use client';

import { useState } from 'react';

export default function Documents() {
  const [query, setQuery] = useState(`{
    "query": {
      "match_all": {}
    },
    "_source": [ "document_id", "Classification" ]
  }`); // Set the initial state with your JSON query string
  const [results, setResults] = useState([]); // Holds the search results
  const [error, setError] = useState(''); // Holds any errors

  // Function to handle the search when the button is clicked
  const handleSearch = async () => {
    setError('');
    try {
      // Parse the query string into JSON
      const parsedQuery = JSON.parse(query);

      const response = await fetch('https://4psoef8lpd.execute-api.us-east-1.amazonaws.com/prod/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(parsedQuery)
      });

      if (!response.ok) {
        throw new Error('Search failed with status ' + response.status);
      }

      const data = await response.json();
      setResults(data); // Set the search results
    } catch (err) {
      console.error(err);
      setError('Error: ' + err.message);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Documents Search</h1>

      <div style={{
        border: '2px solid #ccc',
        borderRadius: '10px',
        padding: '15px',
        marginBottom: '20px',
        backgroundColor: '#f9f9f9'
      }}>
        <label htmlFor="query" style={{ fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>Enter Query:</label>
        <textarea
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          rows="8"
          cols="50"
          placeholder="Enter your search query in JSON format"
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
            fontFamily: 'inherit'
          }}
        />
      </div>

      <button
        onClick={handleSearch}
        style={{
          padding: '12px 20px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
      >
        Start Search
      </button>

      {error && <div style={{ color: 'red', marginTop: '20px' }}>{error}</div>}

      <div style={{
        marginTop: '20px',
        maxHeight: '400px',
        overflowY: 'auto',
        border: '2px solid #ccc',
        borderRadius: '10px',
        padding: '15px',
        backgroundColor: '#f9f9f9',
      }}>
        <h2>Results</h2>
        <pre style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '5px',
          padding: '10px',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
          {JSON.stringify(results, null, 2)}
        </pre>
      </div>
    </div>
  );
}