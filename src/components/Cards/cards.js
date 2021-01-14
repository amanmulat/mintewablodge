import React from 'react'
import {Card} from './card/card'







const Cards = (props)=>{
        return(
          <div className="minimalCard"> 
            <div className="container">
                <div className="row">
                    {props.contents.map(content=>{
                        return(
                           <div className="col-md-6 col-lg-3 ">
                            <Card imgsrc={content.image} title = {content.title} description={content.description}/>
                        </div> 
                        )
                        
                    })}

                    {/* <div className="col-md-6 col-lg-3 ">
                        <Card imgsrc={Bedroom} title ="Bedroom" description={description}/>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <Card imgsrc={Sunset} title="Sunset" description={description}/>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <Card imgsrc={People} title="Restorant" description={description}/>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <Card imgsrc={People} title="Restorant" description={description}/>
                    </div> */}
                </div>
            </div>
          </div>
        );
    }


export default Cards;