import React from 'react'
import './css/Home.css'
import photo from '../images/home.jpg'
import logo from '../images/logo.png'


import {NavLink} from 'react-router-dom'


export default function Home() {

    // style={{backgroundImage:`url(${photo})`,backgroundAttachment:'fixed', backgroundSize: '100% 100%', backgroundRepeat:"no-repeat"}}
    return (
        <section className="home" style={{backgroundImage:`url(${photo})`,backgroundAttachment:'fixed', backgroundSize: '100% 100%', backgroundRepeat:"no-repeat"}}>  
            <div className="navbar">
                            
                <NavLink to="/" className="brand-logo center"><img className="nav__logo" src={logo} alt="logo"/></NavLink>         
            
            </div>

            <div className="containerrr">
                <div className="heading">
                    <h1>Muktar Enterprise</h1>

                    <NavLink to="/explore"><button className="btn btn-primary">Explore</button></NavLink>
                
                    <p>a build of different companies, businesses and entities operating in varied sectors and segments as a collective and complementary aggregate.</p>
                    <p>Airport | Fintech | Industry 4.0 | Logistics |Iot and AI | UTM | Smart City !</p>
                    <p>Pioneering businesses and technologies, creating sustainable value with collaborative and indulgent association banking on skill, knowledge, perseverance and steadfastness.</p>
                
                </div>
            </div>
        </section>
    )
}
