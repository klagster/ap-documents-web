'use client';

import { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core'; // Core viewer
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // Default layout plugin
import '@react-pdf-viewer/core/lib/styles/index.css'; // Core viewer styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css'; // Plugin styles

export default function FQuery() {
  const [query, setQuery] = useState(`{
    "file_key": "emails/attachments/_6XR0XZ3R9.PDF"
  }`);
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  // Plugin for default toolbar and layout
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // Handle search button click
  const handleSearch = async () => {
    setError('');
    setUrl('');
    try {
      const parsedQuery = JSON.parse(query);

      const response = await fetch('https://1wvw93ix0j.execute-api.us-east-1.amazonaws.com/prod/generate-presigned-url', {
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
      setUrl(data.url); 
      
    } catch (err) {
      console.error(err);
      setError('Error: ' + err.message);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Presigned URL Generator</h1>

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
          rows="4"
          cols="50"
          placeholder='{"file_key": "emails/attachments/_6XR0XZ3R9.PDF"}'
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
        Display PDF
      </button>

      {error && <div style={{ color: 'red', marginTop: '20px' }}>{error}</div>}

      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f9f9f9',
        border: '2px solid #ccc',
        borderRadius: '10px',
        minHeight: '100px',
      }}>
        {url ? (
          <>
            

            <div style={{ marginTop: '20px' }}>
              <h2>PDF Viewer</h2>
              <div style={{ height: '600px' }}>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                  <Viewer fileUrl={url} plugins={[defaultLayoutPluginInstance]} />
                </Worker>
              </div>
            </div>
          </>
        ) : (
          <p>No URL generated yet. Run a query to generate a presigned URL.</p>
        )}
      </div>
    </div>
  );
}