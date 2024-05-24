import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
        <header id="header"></header>
          <div className="container">
              <nav>
                  <ul>
                      <li><a className="contents-color" href="">Help</a></li>
                      <li><a className="contents-color" href="">Privacy</a></li>
                      <li><a className="contents-color" href="">Legal</a></li>
                      <li><a className="contents-color" href="">Contact</a></li>
                  </ul>
                  <div className="icons">
                      <i className="fa-brands fa-facebook-f"></i>
                      <i className="fa-brands fa-twitter"></i>
                      <i className="fa-brands fa-google-plus-g"></i>
                      <i className="fa-brands fa-skype"></i>
                      <i className="fa-brands fa-square-instagram"></i>
                  </div>
              </nav>
          </div>
        
    </>
  )
}

export default App
