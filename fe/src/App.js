import React, {useState, useEffect, useReducer} from 'react';

import axios from 'axios';
import Fullscreen from "react-full-screen";

import Login from './Login.js';
import Register from './Register.js';
import PhragList from './PhragList.js';
import MutPhrag from './MutPhrag.js';
import NewPhrag from './NewPhrag.js';
import Hdr from './Hdr.js';
import Button from './Button.js'
import {reducer, initialState, getSelectors, getActions} from './state.js';
import styles from './App.module.css'


export const Conn = React.createContext(null)

const SHOW_DEBUGGER = false;

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
    if (token) {
      setDbgRC(dbgRC + 1)
      api.fetchPhrags()
    } else {
      acts.phr_load([])
    }
  }, [token])

  const [isFull, setFull] = useState(false)

  return (
    <Conn.Provider value={conn}>
      <Fullscreen
        enabled={isFull}
        onChange={isFull => setFull(isFull)}>
        <div className={styles.body}>
          <br/>
          <Hdr />
          { token && <div>
            <div className={styles.window}>
              <div className={styles.left}>
                <NewPhrag />
                <PhragList />
              </div>
              <div className={styles.right}>
                <MutPhrag selPhrag={select.selPhrag()}/>
              </div>
            </div>
          </div>}
          <Login isFull={isFull} setFull={setFull}/>
          { SHOW_DEBUGGER && <div>
            <h2 onClick={() => setDbg(!dbg)}>~~~~DEBUGGER MODE~~~~~</h2>
            {dbg && <div>
              <p>App Level render count: {dbgRC}</p>
              <Register />
              <pre>{JSON.stringify(appState, null, 2)}</pre>
            </div>}
          </div>}
        </div>
      </Fullscreen>
    </Conn.Provider>
  );
}
