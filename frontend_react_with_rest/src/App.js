import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';

const API_URL = '/api';

function App() {
  const [backendResponse, setBackendResponse] = useState('');
  useEffect(() => {
    Axios.get(API_URL)
      .then((response) => {
        setBackendResponse(JSON.stringify(response.data));
      })
      .catch((response) => {
        setBackendResponse(response.status)
      });
  }, []);

  return (
    <div className="App">
      <div>Backend says: {backendResponse} </div>
      <p>Veneta is testing the redeploymet</p>
    </div>
  );
}

export default App;
