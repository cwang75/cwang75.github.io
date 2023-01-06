import React from 'react';
import './Footer.scss';
import logo from '../../assets/img/logo.png'
import {Row, Col} from "react-bootstrap";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <Row className="align-items-end ">
        <Col>
          <img src={logo} alt="logo" className="footer-logo"/>
        </Col>
        <Col>
          <h4>
            Contact Me!
          </h4>
          <a href="mailto: cw75@wharton.upenn.edu"> <p>cw75@wharton.upenn.edu</p></a>
        </Col>
        <Col>
          <p>
            &#169; 2023 XIAOCHEN (CLAIRE) WANG
          </p>
        </Col>
      </Row>


    </section>
  )
}

export default Footer;
