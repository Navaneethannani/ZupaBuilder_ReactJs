import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/home/home.jsx'
import Experts from './components/experts/experts.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Blog from './components/blog/blog.jsx'
import Services from './components/services/services.jsx'
import Contact from './components/contact/contact.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Home />
    <Experts />
    <Portfolio />
    <Blog />
    <Services />
    <Contact />
  </React.StrictMode>
)