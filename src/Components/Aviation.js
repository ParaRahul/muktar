import React from 'react'
import './css/Aviation.css'


import photo from '../images/Patterns/6.jpeg'
import photo1 from '../images/aviation/photo7.jpg'
import photo2 from '../images/aviation/pic02.jpg'
import photo3 from '../images/aviation/photo7x.jpg'
import photo4 from '../images/aviation/soaring.jpg'
import {Card1} from './Card'
import NavBar from './NavBar'

export default function Aviation() {

    // const bg_img=`url(${photo})`
    return (
        <div className="aviation" >
            <div id="bg">
                <img src={photo} alt="clkfpf" />
            </div>
            <NavBar too="/explore" />
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 l6"> 
                        <Card1
                        title="AIRLINE"
                        description="An airline for a post lockdown world with greater hygiene and social distancing as the new norm for domestic and international air travel"
                        photo={photo1}
                        alt="img1"
                        lin="https://doelairways.com/"
                        />
                    </div>
                    <div className="col s12 m6 l6"> 
                        <Card1
                        title="FBO"
                        description="Sale of aviation fuel + Line services for general aviation aircraft + Aircraft rental and sightseeing + Aircraft storage (tie-down or hangar) + Airplane & Fleet management + Aerial advertising and Aerial survey"
                        photo={photo2}
                        alt="img1"
                        
                        />
                    </div>
                    <div className="col s12 m6 l6"> 
                        <Card1
                        title="AIRTAXI"
                        description="An unscheduled air operator for a post lockdown world requiring greater hygiene and social distancing as the new norm for domestic and international air travel with exclusive or shared occupancy"
                        photo={photo3}
                        alt="img1"
                        lin="http://www.muktair.online/"
                        />
                    </div>
                    <div className="col s12 m6 l6"> 
                        <Card1
                        title="FLYING CLUB"
                        description="A club with flying as its primary sport, promoting “soaring” – the unfettered flying of unpowered aircraft, sailplanes, riding naturally occurring rising currents of air, thermals; a skill taught to every aspiring pilot."
                        photo={photo4}
                        alt="img1"
                        lin="https://soaring.casa/"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}



