import React from 'react'
import './home.css'

function Home() {
    return (
        <>
        <div>
            <div id="home">
                <div className="container1"> 
                    <nav>
                        <img src="src/assets/images/zupabuilder.png" className="logo" /> 
                        <ul>
                            <div className="contents">
                                <li><a className="contents-color1" href="#home">Home</a></li>
                                <li><a className="contents-color1" href="#experts">Experts</a></li>
                                <li><a className="contents-color1" href="#portfolio">Portfolio</a></li>
                                <li><a className="contents-color1" href="#blog">Blog</a></li>
                                <li><a className="contents-color1" href="#services">Services</a></li>
                                <li><a className="contents-color1" href="#contact">Contact</a></li>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <br />
        </>
    )
}

export default Home