import React, {useEffect} from 'react'
import './css/Card.css'

import {NavLink} from 'react-router-dom'

import {gsap} from 'gsap'


const Card1=({title,description,photo})=>{
    const bg_img=`url(${photo})`
    return(
        <div className="card small card1" style={{backgroundImage:bg_img , backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}}>
            <div className="card-content white-text">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <a href="#/">Read more...</a>
            </div>
        </div>
    )
}




const Card2=({title,description,photo,lin,size})=>{
    return(
        <div className={`card ${size}`}>
        <div className="card-image">
          <img src={photo}  alt="somephoto" />
          <h5 className="card-title">{title}</h5>
        </div>
        <div className="card-content">
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a href={lin} target="_blank" rel="noreferrer" >Learn More</a>
        </div>
        </div>                                                                                    
    )
}




const Card3 = ({title,description,photo,title2,transfer,contact}) => {
    
    
    useEffect(() => {
        gsap.fromTo(".flip-card", {x:-200},{rotation: 360, x: 0, duration: 1});
       
    }, [])


    const transferto = `/${transfer}`
  
    return(
        <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={photo} alt="Avatar" style={{borderRadius:20}} />
                                <div className="contentt">
                                    <h5>{title}</h5>
                                    <h6>{description}</h6>
                                </div>
                            </div>
                        <div className="flip-card-back">
                            {contact? <a href="mailto:rsvp@muk-tar.com">{title2}</a>:<NavLink to={transferto} style={{color:'white'}}>{title2}</NavLink>}
                        </div>
                    </div>
                </div>
    )
}



const Card4=({title,description,photo,lin})=>{
    return(
        <div className="card small card4">
            <div className="card-image waves-effect waves-block waves-light">
            <img src={photo} className="activator"  alt="somephot" />
            </div>
            <div className="card-content">
            <h5 className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">more_vert</i></h5>
            <p><a href={lin?lin:"#"} target="_blank" rel="noreferrer" >Read More</a></p>
            </div>
            <div className="card-reveal">
            <h5 className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></h5>
            <p>{description}</p>
            </div>
        </div>
    )
}





const Card6=({title,description,photo,lin})=>{

    const bg_img=`url(${photo})`
   
    return(
        <div className="card6">
            <div className="card__image" style={{backgroundImage:bg_img}}></div>
            <div className="card__content">
                <div className="card__title"><h5 >{title}</h5></div>
                <div className="card__snippet"><p>{description}</p></div>
                <div className="card__readmore"><a href={lin} target="_blank" rel="noreferrer" >Read More</a></div>
            </div>
        </div>
    )
}





const Card9 =({title,description,photo})=>{
    return(
        <div className="card">
            <div className="card-image">
              <img src={photo} alt="cardimage" />
              <span className="card-title">{description}</span>
            </div>
            <div className="card-content">
                <h5 style={{marginTop:"0"}}>{title}</h5>
            </div>
        </div>
    )
}




const Card15=({title,description,photo,lin})=>{

    const bg_img =`url(${photo}) `
    


    return(
        <article className="card">
            <div className="thumb" style={{background: bg_img, backgroundSize:'100% 100%'}}></div>
            <div className="infos">
                <h5 >{title}</h5>
              
                <p className="txt">
                    {description}
                </p>
                <h3 className="details"><a href={lin} target="_blank" rel="noreferrer">MORE</a></h3>
            </div>
        </article>
    )
}




export {Card1,Card2,Card3,Card4,Card6,Card9,Card15}
