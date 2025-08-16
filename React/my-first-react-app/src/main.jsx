import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FirstComponent from './Greeting.jsx'
import { FavFood } from './FavFood.jsx'
import { MyJSX, Todo } from './HTMLtoJSX.jsx'
import { AnimalListOne, AnimalListTwo } from './RenderTech.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AnimalListOne/>
    <AnimalListTwo/>
  </React.StrictMode>,
)
