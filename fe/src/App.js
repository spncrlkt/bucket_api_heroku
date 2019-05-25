import React, {useState, useEffect} from 'react';

import axios from 'axios';

import './App.css';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `you clicked ${count} times`
  })

  const [status, setStatus] = useState('no')
  const loadEm = () => axios.get('/')
    .then(res => setStatus(res.status))
  useEffect(() => { loadEm() }, [])

  return (
    <div className="App">
      <p>{status}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setStatus('clear')}>
        clear
      </button>
      <button onClick={loadEm}>
        rack em
      </button>
    </div>
  );
}

export default App;
