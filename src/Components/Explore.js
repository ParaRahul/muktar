import React from 'react'
import './css/Explore.css'
import photo1 from '../images/explore/1.png'
import photo2 from '../images/explore/2.png'
import photo3 from '../images/explore/3.png'
import photo4 from '../images/explore/4.png'
import photo5 from '../images/explore/5.png'
import photo6 from '../images/explore/6.png'
import photo7 from '../images/explore/7.png'
import photo8 from '../images/explore/8.png'
import photo9 from '../images/explore/9.png'
import photo10 from '../images/explore/10.png'
import photo11 from '../images/explore/contact.jpg'

import NavBar from './NavBar'
import {Card3} from './Card'
import Footer from './Footer'

export default function Explore() {
    return (
       <section className="explore">
       
            <NavBar too="/" />
           <div className="explore-container">
                <Card3 title="STEEL" description="Community Building" title2="Mild Steel" transfer="steel" photo={photo1} />
                <Card3 title="AEROSPACE" description="Sky is not the limit" title2="Design to end-of-life" transfer="aerospace" photo={photo2}/>
                <Card3 title="NETWORK" description="Network's the computer" title2="Communication to computing" transfer="network"  photo={photo3}/>
                <Card3 title="INFRASTRUCTURE" description="A mile of Runway will take you anywhere" title2="Industrial Park to Smart City" transfer="infrastructure" photo={photo4}/>
                <Card3 title="AVIATION" description="Into the blue yonder" title2="Airlines to Flying Clubs" transfer="aviation" photo={photo5}/>
                <Card3 title="SKILLING" description="Knowledge isthe greatest treasure" title2="Centers of Excellence" transfer="skilling" photo={photo6} />
                <Card3 title="MEDIA" description="The strength of the community" title2="English periodical - aeronautics & general aviation." transfer="explore" photo={photo7} />
                <Card3 title="EVENTS & RECREATION" description="Work too can be fun" title2="Air Shows to Thematic Tours" transfer="events" photo={photo8} />
                <Card3 title="AFFLIATES" description="" title2="Business associates" photo={photo9} transfer="affiliates" /> 
                <Card3 title="WE" title2="About us" photo={photo10}  transfer="Aboutus" />
                <Card3  title2="rsvp@muk-tar.com" photo={photo11} contact="contact" /> 
            </div>
            
            <Footer />
       </section>
    )
}


