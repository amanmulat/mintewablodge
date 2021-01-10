import React from 'react'
import testmonys from './content'
import "./testmony.scss"
import Carousel from 'react-bootstrap/Carousel'
import imgimg from '../../assets/37.jpg'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { ThemeProvider } from "@material-ui/core";
import theme from '../../components/function/theme'
// import Carousel from 'react-bootstrap'
const Testmony = ()=>{
    // return(
//         <div>
//         <div>
//             <h2>whas up</h2>
//         </div>
//         <div>
// {Ts.map(oneTestmony =>{
//         return(
//             <div>
//                 {oneTestmony.title } 
//                 <div>
//                     {oneTestmony.description}
//                 </div>
//             </div>
            
//         )
            
// })}
//         </div>
//     </div>

    // )
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <ThemeProvider theme={theme}> 
      <Carousel interval = {null} activeIndex={index} onSelect={handleSelect} prevIcon={<ArrowBackIosIcon color="primary"/>} nextIcon={<ArrowForwardIosIcon color="primary"/>}>
        {testmonys.map(oneTestmony =>{
          return(
            <Carousel.Item>
          <div className="carousel-background " >

          
          <Carousel.Caption className="row">
            <div className="col-md-6">
              <h3 >" {oneTestmony.title} "</h3>
              <h4>Biruk Helan</h4>
            </div>
            <div className="col-md-6">
              <p >" {oneTestmony.description} "</p>
            </div>
          </Carousel.Caption></div>
        </Carousel.Item>
          )
          
        })}
        
        
       
      </Carousel>
      </ThemeProvider>
    );
    
}

export default Testmony