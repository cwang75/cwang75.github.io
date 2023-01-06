import React from 'react';
import { motion } from 'framer-motion';
import {Col, Row} from "react-bootstrap";
// import ReactToolTip from 'react-tooltip';
import './Skills.scss';
import { logos } from '../../assets/logoIndex';


const Skills = () => {
  const skillLanguages = [
    { name: "Java", img: logos.java },
    { name: "Python", img: logos.python },
    { name: "JavaScript", img: logos.javascript },
    { name: "HTML", img: logos.html },
    { name: "CSS", img: logos.css },
    { name: "SQL", img: logos.sql },
    { name: "Swift", img: logos.swift },
    { name: "Latex", img: logos.latex },
    { name: "OCaml", img: logos.ocaml },
    { name: "R", img: logos.r },
  ];
  const skillFrameworks = [
    { name: "React", img: logos.reactLogo },
    { name: "Node.JS", img: logos.node },
    { name: "Express", img: logos.express },
    { name: "jQuery", img: logos.jquery },
    { name: "socket.io", img: logos.socket },
    { name: "Bootstrap", img: logos.bootstrap },
    { name: "Numpy", img: logos.numpy },
    { name: "Pandas", img: logos.pandas },
    { name: "Scikit-learn", img: logos.scikit },
    { name: "Spark", img: logos.spark },
  ];
  const toolSWE = [
    { name: "mongoDB", img: logos.mongodb },
    { name: "git", img: logos.git },
    { name: "AWS", img: logos.aws },
    { name: "npm", img: logos.npm },
    { name: "firebase", img: logos.firebase },
  ];
  const toolDesign = [
    { name: "Figma", img: logos.figma },
    { name: "Adobe Illustrator", img: logos.ai },
    { name: "Balsamiq", img: logos.balsamiq },
    { name: "Rhino", img: logos.rhino },
    { name: "Spline 3D", img: logos.spline },
    { name: "Lucidchart", img: logos.lucid },
    { name: "unity", img: logos.unity },
  ];
  const toolOther = [
    { name: "Microsoft Suite", img: logos.microsoft },
    { name: "Final Cut Pro", img: logos.fcpx },
    { name: "Adobe Audition", img: logos.au },
    { name: "Adobe After Effects", img: logos.ae },
    { name: "Adobe Premiere", img: logos.ap },
  ];

  return (
    <section className="skills" id="skills">
      <Row>
          <motion.div
            whileInView={{ y:[100,0], opacity:[0,1] }}
            transition={{ duration: 0.5 }}
            className="skills-title"
          >
            <h2>Skills</h2>
            <p>
              My toolkit that help me to innovate.
            </p>
          </motion.div>
      </Row>
      <Row>
        <Col xs={12} md={6} className="skills-type-1">
          <Row className="skills-type-section">
            <Row className="skills-type-title">
              Languages
            </Row>
            <Row>
                {
                  skillLanguages.map((skill) => {
                    return (
                      <Col>
                        <motion.div
                          className="skills-item"
                          whileInView={{ opacity: [0,1] }}
                          transition={{ duration: 1.0 }}
                          key={skill.name}
                        >
                          <div className="skills-item-logo">
                            <img src={skill.img} alt="logo" />
                          </div>
                          <p className="skills-item-name">{skill.name}</p>
                        </motion.div>
                      </Col>
                    )
                  })
                }
            </Row>
          </Row>
          <Row className="skills-type-section">
            <Row className="skills-type-title">
              Frameworks
            </Row>
            <Row>
                {
                  skillFrameworks.map((skill) => {
                    return (
                      <Col>
                        <motion.div
                          className="skills-item"
                          whileInView={{ opacity: [0,1] }}
                          transition={{ duration: 1.0 }}
                          key={skill.name}
                        >
                          <div className="skills-item-logo">
                            <img src={skill.img} alt="logo" />
                          </div>
                          <p className="skills-item-name">{skill.name}</p>
                        </motion.div>
                      </Col>
                    )
                  })
                }
            </Row>
          </Row>
        </Col>
        <Col xs={12} md={6} className="sills-type-2">
          <Row className="skills-type-section">
            <Row className="skills-type-title">
              Tools
            </Row>
            <div>
              <span className="tool-type">
                  Software Development
              </span>
            </div>
            <Row className="skills-start">
                {
                  toolSWE.map((skill) => {
                    return (
                      <Col>
                        <motion.div
                          className="skills-item"
                          whileInView={{ opacity: [0,1] }}
                          transition={{ duration: 1.0 }}
                          key={skill.name}
                        >
                          <div className="skills-item-logo">
                            <img src={skill.img} alt="logo" />
                          </div>
                          <p className="skills-item-name">{skill.name}</p>
                        </motion.div>
                      </Col>
                    )
                  })
                }
            </Row>
            <div className="tool-type-div">
              <span className="tool-type">
                  Design
              </span>
            </div>
            <Row className="skills-start">
                {
                  toolDesign.map((skill) => {
                    return (
                      <Col>
                        <motion.div
                          className="skills-item"
                          whileInView={{ opacity: [0,1] }}
                          transition={{ duration: 1.0 }}
                          key={skill.name}
                        >
                          <div className="skills-item-logo">
                            <img src={skill.img} alt="logo" />
                          </div>
                          <p className="skills-item-name">{skill.name}</p>
                        </motion.div>
                      </Col>
                    )
                  })
                }
            </Row>
            <div>
              <span className="tool-type">
                  Others
              </span>
            </div>
            <Row>
                {
                  toolOther.map((skill) => {
                    return (
                      <Col>
                        <motion.div
                          className="skills-item"
                          whileInView={{ opacity: [0,1] }}
                          transition={{ duration: 1.0 }}
                          key={skill.name}
                        >
                          <div className="skills-item-logo">
                            <img src={skill.img} alt="logo" />
                          </div>
                          <p className="skills-item-name">{skill.name}</p>
                        </motion.div>
                      </Col>
                    )
                  })
                }
            </Row>
          </Row>
        </Col>
      </Row>

    </section>
  )
}

export default Skills;
