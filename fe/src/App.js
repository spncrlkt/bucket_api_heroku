import React, {useState, useEffect, useReducer} from 'react';

import axios from 'axios';

import Login from './Login.js';
import Register from './Register.js';
import PhragList from './PhragList.js';
import MutPhrag from './MutPhrag.js';
import NewPhrag from './NewPhrag.js';
import Hdr from './Hdr.js';
import {reducer, initialState, getSelectors, getActions} from './state.js';
import styles from './App.module.css'


export const Conn = React.createContext(null)

const SHOW_DEBUGGER = true

export default function App() {
  const [dbg, setDbg] = useState(false)
  const [dbgRC, setDbgRC] = useState(0)
  const [appState, dispatch] = useReducer(reducer, initialState)
  const select = getSelectors(appState)
  const acts = getActions(dispatch)
  const token = select.token()
  const headers = token ? {"Authorization": `Bearer ${token}`} : {}
  const api = axios.create({
    headers,
  })
  api.fetchPhrags = () => api.get('/phrag/')
    .then(res => acts.phr_load(res.data.phrags))
  const conn = {
    api,
    acts,
    select,
  }

  // INIT FETCH FOR LOGGEDIN USERS
  useEffect(() => {
    setDbgRC(dbgRC + 1)
    if (token) {
      api.fetchPhrags()
    } else {
      acts.phr_load([])
    }
  }, [token, dbgRC, acts, api])
  if (dbgRC > 100) { debugger; }

  return (
    <Conn.Provider value={conn}>
      <div className={styles.body}>
        <p>{dbgRC}</p>
        <Hdr />
        { token && <div>
          <div className={styles.window}>
            <div className="Left">
              <NewPhrag />
              <PhragList />
            </div>
            <div className="Right">
              <MutPhrag selPhrag={select.selPhrag()}/>
            </div>
          </div>
        </div>}
        <Login />
        { SHOW_DEBUGGER && <div>
          <h2 onClick={() => setDbg(!dbg)}>~~~~DEBUGGER MODE~~~~~</h2>
          {dbg && <div>
            <Register />
            <pre>{JSON.stringify(appState, null, 2)}</pre>
          </div>}
        </div>}
      </div>
    </Conn.Provider>
  );
}
