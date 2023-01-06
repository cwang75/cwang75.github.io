import {Col, Container, Row} from "react-bootstrap";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

export const ProjectCard = ({title, description, imgUrl, links}) => {
  return (
    <Col sm={6} md={4}>
      <Container className="proj-imgbx">
        <div className="proj-img">
          <img src={imgUrl} alt={title} />
        </div>
        <Row className="proj-name">
          <Col sm={9}>
            <h4>{title}</h4>
          </Col>
          <Col>
            {
              links.map(link => {
                if (link.type === "github") {
                  return (
                    <a href={link.url} target="_blank">
                      <BsGithub size={25}/>
                    </a>
                  )
                } else if (link.type === "website") {
                  return (
                    <a href={link.url} target="_blank">
                      <BsLink45Deg href={link.url} size={25}/>
                    </a>
                  )
                }
              })
            }
          </Col>
        </Row>
        <div className="proj-txtx">
          <span>{description}</span>
        </div>
      </Container>
    </Col>
  )
}
