import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

const Backg = styled.div`
    background-color : #270000;
    bottom: 0rem;
    min-height : 100%;
    display : block;
    padding: 5rem 0 5rem 0;
    .footerTitle {
        padding :0 0 2rem 0;
        color : sandybrown;
        font-size  : 2.5rem;
        text-align: center;
    }
 
    }
    .footerDesc {
        text-align : center; 
        align-items : center;
        font-size : 1rem;
        padding : 1rem;
        color : sandybrown ; 
        display : block;
        .footer-icons{
            margin-bottom : 1rem;
            font-size: 6rem;
            text-align : center
            display: block;
        }
    span {
        display : block;
    }
    a {
        all: unset;
     }
    }
    `;

export const Footer = () => (
  <Backg>
    <Container>
      <div className="row">
        <div className="col-md-12 footerTitle">Contact Us</div>
        <div className="col-md-4 footerDesc">
          <LocationOnIcon className="footer-icons" />
          <span>
            {" "}
            <a
              className="footerlinks"
              href="https://goo.gl/maps/nhwbt3PGfUQqEMNF8"
              rel="noopener noreferrer"
              target="_blank"
            >
              Lideta, Gondar ,Ethiopia
            </a>
          </span>
        </div>
        <div className="col-md-4 footerDesc">
          <EmailIcon className="footer-icons" />
          <span>
            <a href="mailto:contactmintewab@gmail.com">
              contactmintewab@gmail.com
            </a>
          </span>
        </div>
        <div className="col-md-4 footerDesc">
          <PhoneIcon className="footer-icons" />
          <span>
            <a className="footerlinks" href="tel:+251930177610">
              0930177610
            </a>
          </span>
          <span>
            <a className="footerlinks" href="tel:+251930177609">
              0930177609
            </a>
          </span>
        </div>
      </div>
    </Container>
  </Backg>
);
