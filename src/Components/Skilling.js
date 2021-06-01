import React from 'react'
import './css/Skilling.css'


import photo from '../images/Patterns/4.jpeg'
import photo1 from '../images/skilling/programm.png'
import photo2 from '../images/skilling/programmer.png'

import {Card2} from './Card'
import NavBar from './NavBar'
import './css/Aviation.css'

export default function Skilling() {
    return (
        <div className="skilling">
            <div id="bg">
                <img src={photo} alt="clkfpf" />
            </div>
            <NavBar too="/explore" />
            <div className="container">
                <div className="row">
                    <div className="col s12 l6">
                        <Card2 size="large card2"
                        title="CoE Aerospace"
                        description="Overview of Space Vehicle Design and Manufacturing, Missiles and UAV, Systems, Propulsion, Aerodynamics, Systems, Aircraft Design and Manufacturing, Materials, Maintenance, Repair and Overhauling. Hydraulic Engineering Concepts, Landing Gear Concepts, Steering, brake system. System Calculations and Sizing, system modelling and behaviour simulations.
                        Control System Analysis and Validation System Specification Optimisation
                        Metal Structural engineering concepts, Fastening Concepts, Composite Structure Concepts, Manufacturing Process Concepts."
                        photo={photo1}
                        alt="img1"
                        lin="https://kaushal.education/"
                        />
                    </div>



                    <div className="col s12 l6">
                        <Card2 size="large card2"
                        title="CoE Aviation"
                        description="Marshalling is one-on-one visual communication and part of aircraft ground handling. It is used as an alternative to or in addition to radio communications between pilot and air traffic control. The marshaller is equipped with a reflecting safety vest, a helmet with acoustic earmuffs, gloves and marshalling wands–handheld illuminated beacons.
                        Every airplane has a parachute for every person or seat, onboard it - airlines, jets and personal aircraft. There are only three certified senior riggers in India and more than 2000 civilian airplanes! Also advanced aircrew training"
                        photo={photo2}
                        alt="img1"
                        lin="https://kaushal.education/"
                        />
                    </div>
            
                </div>
            </div>
        </div>
    )
}














