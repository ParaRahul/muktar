import React from 'react'
import Nav from './NavBar'
import  './css/About.css'
import me from '../images/about.png'

export default function About() {
    return (
        <div className='about' >
            <Nav too='explore' />
            <h1 className="center">ABOUT US</h1>
            <div className="containerA">
                
 
                    <div className="leftt">   
                        
                        <p>MukTar Enterprises started in 1976 as a manufacturer and trader of steel bars, fasteners, scrap and mill-scale. The years since have seen expansion, diversification and pioneering efforts; moving beyond steel into information technology, telecommunication, infrastructure and aerospace, through radio systems, fintech and media besides having dabbled in energy management, technology retail, air bubble packaging material and plastic recycling.                    </p>
                        <p>Founded by late Shri Madanlal Agarwal, an “nth” generation entrepreneur, with a vision for customer value creation and inclusive entrepreneurship, MukTar has become a build of many companies operating in different sectors and segments conducting their businesses independently while cooperating and complementing each other; growing across national boundaries with presence in developed and developing markets supported and collaborated by affiliates.</p>
                        <h5 className="center">AIRWAVES TO AIRWAYS</h5>
                    </div>
        
                    <div className="rightt">
                    <img src={me} className="abt-img" alt="React Logo" />
                    </div>      
           
            </div>
        </div>
    )
}




