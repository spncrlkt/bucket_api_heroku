import React, {useContext} from 'react';

import { Api } from './App.js';

export default function Test() {
  const api = useContext(Api)
  const getBuckets = () => api.get('/bucketlists/').then(res => console.log(res))
  const getPhrags = () => api.get('/phrag/').then(res => console.log(res))

  return <div>
    <p>Test</p>
    <button onClick={getBuckets}>
      get bucks
    </button>
    <button onClick={getPhrags}>
      get phrags
    </button>
  </div>
}
