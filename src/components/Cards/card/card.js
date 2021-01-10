import React from 'react'
import './card.scss'
export const Card = props=> 
    (
        <div className="mincard  ">
            <div className="overflow">
                <img src={props.imgsrc} alt={props.title} className="mincard-img-top"/>
            </div>
            <div className="mincard-body ">
  
                <p className="mincard-text">
                  {props.description}
                </p>
                {/* <a href="#" className="btn btn-outline-success">Go anywhere</a> */}
            </div>
        </div>
    )