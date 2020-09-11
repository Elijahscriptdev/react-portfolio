import React from "react";
// import PROJECTS from "../../data/projects";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Projects.css'

const Projects = () => {
  return (
    <div className="project">
      <h2 className="text-center title">Highlighted Projects</h2>
      <Container>
        <Row className="mx-auto">
          <Col className="mx-auto ca" xs={12} md={5} lg={5} style={{ height: "350px", margin: 10 }}>
          <img src="https://res.cloudinary.com/elijjaaahhhh/image/upload/v1599846909/clothing-ecommerce_tnekv9.png" alt="img" />
          </Col>
          <Col className="mx-auto" xs={12} md={5} lg={5} style={{ height: "350px", margin: 10 }}>
            xs=6 md=4
          </Col>
          <Col className="mx-auto" xs={12} md={5} lg={5} style={{ height: "350px", margin: 10 }}>
            xs=6 md=4
          </Col>
          <Col className="mx-auto ca" xs={12} md={5} lg={5} style={{ height: "350px", margin: 10 }}>
          <img src="https://res.cloudinary.com/elijjaaahhhh/image/upload/v1590576570/BuzzLife-new_iq2xgh.png" alt="img" />
          </Col>
          <Col className="mx-auto ca" xs={12} md={5} lg={5} style={{ height: "350px", margin: 10 }}>
          <img src="https://res.cloudinary.com/elijjaaahhhh/image/upload/v1597177072/Annotation_2020-08-11_205222_adwggq.png" alt="img" />
          </Col>
          <Col className="mx-auto" xs={12} md={5} lg={5} style={{ height: "350px", margin: 10 }}>
            xs=6 md=4
          </Col>
          <Col className="mx-auto" xs={12} md={5} lg={5} style={{ height: "350px", margin: 10 }}>
            
          </Col>
          <Col className="mx-auto ca" xs={12} md={5} lg={5} style={{ height: "350px", margin: 10 }}>
          <img src="https://res.cloudinary.com/elijjaaahhhh/image/upload/v1590519363/showpage_gymxfn.png" alt="img" />
          </Col>
          <Col className="mx-auto ca" xs={12} md={5} lg={5} style={{ height: "350px", margin: 10 }}>
          <img src="https://res.cloudinary.com/elijjaaahhhh/image/upload/v1590586716/FireShot_Capture_116_-_TechClub_-_schoolonlinenow.herokuapp.com_jm529j.png" alt="img" />
          </Col>
          <Col className="mx-auto ca" xs={12} md={5} lg={5} style={{ height: "350px", margin: 10 }}>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
