import React from 'react';
// ROUTER
import { BrowserRouter } from 'react-router-dom'
import Router from './router'

function App() {
  return (
    <BrowserRouter>
      <div className="App page page-web">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
