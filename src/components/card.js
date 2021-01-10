import React from 'react'

export const Card = props=> 
    (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Single room" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                  {props.description}
                </p>
                {/* <a href="#" className="btn btn-outline-success">Go anywhere</a> */}
            </div>
        </div>
    )
