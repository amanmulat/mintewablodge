import React, { Component } from 'react'
import {Card} from './card'
import Church from '../assets/card/visitLocation/church.jpg'
import Kuskuam from '../assets/card/visitLocation/kuskuam.jpg'
import MintewabCastle from '../assets/card/visitLocation/mintewab-castle.jpg'

let description = "occaecat sit laborum voluptate. Excepteur minim velit id excepteur qui velit velit eiusmod ex. Magna amet elit qui pariatur amet duis eiusmod culpa non ut duis nostrud est. Voluptate in aliquip sunt in in et duis amet commodo."
class Cards extends Component{
    render(){
        return(
          <div className="container  card_container"> 
            <div className="row">
                <div className="col-md-6 col-lg-4 ">
                    <Card imgsrc={Church} title ="Bedroom" description={description}/>
                </div>
                <div className="col-md-6 col-lg-4">
                    <Card imgsrc={Kuskuam} title="Sunset" description={description}/>
                </div>
                <div className="col-md-6 col-lg-4">
                    <Card imgsrc={MintewabCastle} title="Restorant" description={description}/>
                </div>
            </div>
          </div>
        );
    }
}

export default Cards;