import React , {useContext}from "react";
// import {Home} from '../components/home';
import {About} from '../components/about';
import {Services} from '../components/services/services';
import {MustVisit} from '../components/mustVisit';
import { InView } from 'react-intersection-observer'
import SLanding from './sLanding'
import AuthContext from '../context/auth-context'
import Booking from '../components/bookingComponent/homereserve'

function Landing (props){
    const context = useContext(AuthContext)
    const [inView, setInView] = React.useState(true)

 
    return(
        <React.Fragment>
            
            <SLanding/>
            <InView  onChange={ setInView} threshold={0.05}>
            <Booking/>
            {context.navigationScrollThingi(inView)}
                <About />
                <Services/>
                <MustVisit/>
                
            </InView>
        </React.Fragment>
         
    )
}

export default Landing;