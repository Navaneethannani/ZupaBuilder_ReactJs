import React from 'react'
import './portfolio.css'

const Portfolio = () => {
    return (
        <div id="portfolio">
            <div className="container3">
                <Square number="3200+" description="Completed projects" />
                <Square number="4900" description="Built houses" />
                <Square number="6000" description="Satisfied customers" />
                <Square number="1900" description="Cups of coffee" />
            </div>
        </div>
    );
}

const Square = ({ number, description }) => {
    return (
        <div className="box">
            <h3>{number}</h3>
            <hr width="15%" />
            <p>{description}</p>
        </div>
    );
}


export default Portfolio
