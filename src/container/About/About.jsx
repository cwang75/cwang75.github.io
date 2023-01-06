import React from 'react';
import './About.scss';
import {Col, Container, Row} from "react-bootstrap";
import { motion } from "framer-motion";
import self from '../../assets/img/about-self.jpg'

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <motion.div
            whileInView={{ y:[100,0], opacity:[0,1] }}
            transition={{ duration: 0.5 }}
            className="about-title"
          >
            <h2>About</h2>
            <p>
              My name is Xiaochen Wang. You can call me Claire.
            </p>
          </motion.div>
        </Row>
        <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration: 1.0, delay: 0.5}}
            className="about-img"
         >
          <Row className="align-items-center">
          <Col xs={12} md={6} xl={4}>
              <img src={self} alt="selfie" className="about-selfie" />
            </Col>
          <Col xs={12} md={6} xl={8}>
            <Row className="align-items-center">
              <Col xs={1} md={1} xl={1}>
                <h1>🎓</h1>
              </Col>
              <Col>
                <h4>
                  I am an undergraduate student studying Marketing & Operations Management in Wharton and Network & Social System Engineering in the Engineering School at the University of Pennsylvania.
                </h4>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col xs={1} md={1} xl={1}>
                <h1>🏠</h1>
              </Col>
              <Col>
                <h4>
                  Originally from Beijing, China, I went to Stevenson high school in California and am currently in Philadelphia, PA.
                </h4>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col xs={1} md={1} xl={1}>
                <h1>💗</h1>
              </Col>
              <Col>
                <h4>
                  I am passionate about defining problems with data, designing and developing innovative ways to solve them, and delivering solutions as user-centric products.
                </h4>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col xs={1} md={1} xl={1}>
                <h1>🦄️</h1>
              </Col>
              <Col>
                <h4>
                  In my free time, you can find me watching horror movies, baking, crafting, and making cool videos.
                </h4>
              </Col>
            </Row>

          </Col>

        </Row>
           <Row>
              <p className="about-montra">
                “I only know that I don’t know anything.” <br/>
                “Solo sé que no sé nada. “ <br/>
                “知之为知之，不知为不知，是知也。”
              </p>
            </Row>
         </motion.div>

      </Container>
    </section>
  )
}

export default About;
