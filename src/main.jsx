import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// "to give illusion of pages"
import { BrowserRouter } from 'react-router-dom';

// 1. npm i react-router-dom
// 2. import "BrowserRoute" to main.jsx
// 3. wrap <App /> component inside main.jsx (or index.js dep on framework) w/ <BrowserRouter> to allow children access to it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
