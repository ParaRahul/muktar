import React from 'react'
import './css/Aerospace.css'
import NavBar from './NavBar'


const Aerospace=() =>{
    return (
        <React.Fragment>
        <NavBar too="/explore"/>
        <div className="aerospace ">
        
            <div className="aerospace-container">
                <div className="aerospace-card" >
                    <div className="face face1">
                        <div className="content">
                            <div className="icon">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                <h5 style={{marginTop:"0"}}>AEROSTRUCTURE</h5>
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Aerostructures including wings, empennages, fuselage and components of metal or composites; formed, layered, machined or cast for platforms ranging from general aviation to space vehicles and business jets.</p>
                        </div>
                    </div>
                </div>
                <div className="aerospace-card">
                    <div className="face face1">
                        <div className="content">
                            <div className="icon">
                                <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                <h5 style={{marginTop:"0"}}>MRO</h5>
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>Maintenance, repair and overhaul (MRO) of commercial airliners, general aviation or military aircraft, whether manned or unmanned, including OEM and components logistics, log book and data management, systems integration and project management.</p>
                        </div>
                    </div>
                </div>
                <div className="aerospace-card">
                    <div className="face face1">
                        <div className="content">
                            <div className="icon">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                                <h5 style={{marginTop:"0"}}>SALES</h5>
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p>An agency network for sales of general and light aircraft, sports planes, sailplanes, personal transport or recreational airplanes, manned or unmanned, piston or turbine engine or unpowered! Some unique and some so very common, to suit most of a buyer’s needs or requirements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Aerospace;
















