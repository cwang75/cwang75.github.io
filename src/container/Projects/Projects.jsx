import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { projectImg } from '../../assets/projectIndex';
import './Projects.scss';

const Projects = () => {
  const projects = [
    {
      title: "DP-Library",
      description: "DP-Library is an open-source platform for researchers to search, download, and upload their trained potential function models. "
       + "Devised new features and made prototypes in Figma by identifying user pain points as a product manager."
       + "Acquired 15.2% more users and improved the model upload rate by 9.6%.",
      imgUrl: projectImg.dp,
      categories: [1, 2, 4],
      links: [
        {
          type: "website",
          url: "https://dplibrary.deepmd.net/#/"
        },
      ]
    },
    {
      title: "Debut",
      description: `Debut is a mobile and web app for student artists at UPenn to collaborate on short-term art projects.
      Led a team of 5, personally worked on UI/UX in Figma, 
      and developed project page of the mobile app and data analytics panel of the web app using React, Node Express, and MongoDB.`,
      imgUrl: projectImg.debut,
      categories: [2, 3],
      links: [
      ]
    },
    {
      title: "PennBook",
      description: `Pennbook is a "mini-Facebook" that allows users to make posts, befriend and chat with other users, 
      browse the latest news articles being recommended to them, and many more. \n
      Led a team of 4, personally worked on the front-end and UI of web pages using Node Express 
      and implemented dynamic content update, picture storage and dynamic search suggestions using jQuery, Cloudinary API, and XMLHttpRequest.`,
      imgUrl: projectImg.pennbook,
      categories: [2, 3],
      links: [
        {
          type: "website",
          url: "https://drive.google.com/file/d/1ZokpYQQLQ8xxUlDyH0QjOVtpfTy26ViK/view?usp=share_link"
        }
      ]
    },
    {
      title: "UPlanet",
      description: `UPlanet is an iOS app that allows students to post, share, and discuss anonymously. 
      Designed and developed the MVP using Swift and implemented the project backend in Firebase.`,
      imgUrl: projectImg.uplanet,
      categories: [2, 3],
      links: [
        {
          type: "github",
          url: "https://github.com/cwang75/UPlanet.git"
        }
      ]
    },
    {
      title: "Storigami",
      description: `Storigami is a revolutionary container alternative that redefines food storage. With an origami design, 
      the container can be compressed into different sizes to satisfy all kind of needs. It is also stackable, packable, and snackable.
      Built the prototype in a  team of 4, personally worked on cap design, pricing, pitching, and advertising.`,
      imgUrl: projectImg.storigami,
      categories: [1, 2, 3, 4],
      links: [
        {
          type: "website",
          url: "https://drive.google.com/file/d/1Bc8DuuJcake_f7d9O04FE7Y4gVaUzfal/view?usp=sharing"
        }
      ]
    },
    {
      title: "Snackstix",
      description: `Snackstix is a pair of wearable finger chopsticks that helps people to pick up snacks like chips from the 
      snack bag without getting their hands dirty. Designed the product in Rhino and 3D printed the final product.`,
      imgUrl: projectImg.snackstix,
      categories: [1, 2, 3],
      links: []
    },
  ];
  return (
    <section className='projects' id='projects'>
      <Container>
        <Row>
          <Col>
            <motion.div
            whileInView={{ y:[100,0], opacity:[0,1] }}
            transition={{ duration: 0.5 }}
            className="about-title"
            >
              <h2>Projects</h2>
              <p>Things I have made!</p>
            </motion.div>
            <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration: 1.0 }}
            className="about-img"
            >
            <Tab.Container id="project-tabs" defaultActiveKey="all">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-evenly align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="all">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="first">Defined</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Designed</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Developed</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="last-tab" eventKey="fourth">Delivered</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="all">
                  <motion.div
                    whileInView={{ y:[100,0], opacity:[0,1] }}
                    transition={{ duration: 0.25 }}
                    className="projects-pane"
                    >
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}/>
                            )
                          })
                        }
                      </Row>
                  </motion.div>
                </Tab.Pane>
                <Tab.Pane eventKey="first">
                  <motion.div
                    whileInView={{ y:[100,0], opacity:[0,1] }}
                    transition={{ duration: 0.25 }}
                    className="projects-pane"
                    >
                    <Row>
                      {
                        projects.map((project, index) => {
                          if (project.categories.includes(1)) {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}/>
                            )
                          }
                        })
                      }
                    </Row>
                  </motion.div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <motion.div
                    whileInView={{ y:[100,0], opacity:[0,1] }}
                    transition={{ duration: 0.25 }}
                    className="projects-pane"
                    >
                    <Row>
                      {
                        projects.map((project, index) => {
                          if (project.categories.includes(2)) {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}/>
                            )
                          }
                        })
                      }
                    </Row>
                  </motion.div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <motion.div
                    whileInView={{ y:[100,0], opacity:[0,1] }}
                    transition={{ duration: 0.25 }}
                    className="projects-pane"
                    >
                    <Row>
                      {
                        projects.map((project, index) => {
                          if (project.categories.includes(3)) {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}/>
                            )
                          }
                        })
                      }
                    </Row>
                  </motion.div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <motion.div
                    whileInView={{ y:[100,0], opacity:[0,1] }}
                    transition={{ duration: 0.25 }}
                    className="projects-pane"
                    >
                    <Row>
                      {
                        projects.map((project, index) => {
                          if (project.categories.includes(4)) {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}/>
                            )
                          }
                        })
                      }
                    </Row>
                  </motion.div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>

  )
}

export default Projects;
