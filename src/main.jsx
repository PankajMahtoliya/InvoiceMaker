import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// import bootstrap ja and css file
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import "../node_modules/bootstrap/dist/css/bootstrap.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
