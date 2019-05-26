import React, {useState, useEffect, useReducer} from 'react';

import axios from 'axios';

import './App.css';
import Login from './Login.js';
import Register from './Register.js';
import {reducer, initialState} from './state.js';

const AppDispatch = React.createContext(null)

function App() {
  const [appState, dispatch] = useReducer(reducer, initialState)

  return (
    <AppDispatch.Provider value={dispatch}>
      <div className="App">
        <pre>{JSON.stringify(appState, null, 2)}</pre>
        <Register />
        <Login />
        <p>
          <button>
            Click me
          </button>
        </p>
      </div>
    </AppDispatch.Provider>
  );
}

export default App;
export { AppDispatch };
