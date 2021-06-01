import React from 'react'

import {NavLink} from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="page-footer black">
            <div className="footer-copyright">
            <div className="container">
                <div className="row">
                <div className="col s6">© Copyright 1976 - 2020 MukTar Enterprises - All Rights Reserved</div>
                <div className="col s6 center" style={{borderLeft:"3px solid white"}}> <NavLink to="/terms" >Terms of Use for Website</NavLink>  </div>
                </div>
                       
               
            </div>
            </div>
        </footer>
    )
}
