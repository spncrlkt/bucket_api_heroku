import React, {useState, useEffect, useReducer} from 'react';

import axios from 'axios';
import Fullscreen from "react-full-screen";

import Account from './Account.js';
import Debugger from './Debugger.js';
import PhragView from './PhragView.js';
import TagView from './TagView.js';
import Hdr from './Hdr.js';
import Button from './Button.js'
import {reducer, initialState, getSelectors, getActions, VIEWS} from './state.js';
import styles from './App.module.css'


export const Conn = React.createContext(null)

const SHOW_DEBUGGER = true;

export default function App() {
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
      setDbgRC(dbgRC + 1)
      acts.phr_load([])
    }
  }, [token])

  const [isFull, setFull] = useState(false)

  return (
    <Conn.Provider value={conn}>
      <Fullscreen
        enabled={isFull}
        onChange={isFull => setFull(isFull)}>
        <div className={styles.body}><br/>
          <Hdr />
          { (token && select.currentView() === VIEWS.PHRAGS) &&
            <PhragView /> }
          { (token && select.currentView() === VIEWS.TAGS) &&
            <TagView /> }
          <Account isFull={isFull} setFull={setFull}/>
          { SHOW_DEBUGGER && <Debugger
            dbgRC={dbgRC}
            appState={appState} /> }
        </div>
      </Fullscreen>
    </Conn.Provider>
  );
}
