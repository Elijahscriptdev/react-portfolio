import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Projects.css";

const Projects = () => {
  return (

    <div className="project mt-5" id="projects">
      <h2 className="text-center title"> Highlighted Projects </h2>{" "}
      <Container>
        <Row className="mx-auto align-items-center">
        <Col
            className="mx-auto"
            xs={12}
            md={5}
            lg={5}
            style={{
              height: "350px",
              margin: 10,
            }}
          >
            <div className="content">
            <h1> Travel With Benefits Website </h1>{" "}
            <p>
            This is a travel website where users login, book for a bus ticket, get booking history, search for available
            buses travelling on a particular day.{" "}
            </p>{" "}
            <p>
              Built with:
              <span> React, Redux, Ruby On Rails, Postgresql and jwt authentication </span>{" "}
            </p>{" "}
            <div className="button">
              <a> Locked </a> 
              <a href="https://travelwithbenefit.herokuapp.com/" target="_blank" rel="noopener noreferrer"> Live Preview </a>{" "}
            </div>{" "}
            </div>
          </Col>
        <Col
            className="mx-auto ca"
            xs={12}
            md={6}
            lg={6}
            style={{
              height: "350px",
              margin: 10,
            }}
          >
            <img
              src="https://res.cloudinary.com/elijjaaahhhh/image/upload/v1608069047/FireShot_Capture_128_-_Travel_With_Benefits_-_travelwithbenefit.herokuapp.com_hpr63v.png"
              alt="img"
            />
          </Col>
          
        <Col
            className="mx-auto ca"
            xs={12}
            md={5}
            lg={5}
            style={{
              height: "350px",
              margin: 10,
            }}
          >
            <img
              src="https://res.cloudinary.com/elijjaaahhhh/image/upload/v1600276547/FireShot_Capture_103_-_OnlineShop_-_my-restaurant-store.herokuapp.com_quqzgt.png"
              alt="img"
            />
          </Col>{" "}
          <Col
            className="mx-auto"
            xs={12}
            md={5}
            lg={5}
            style={{
              height: "350px",
              margin: 10,
            }}
          >
            <div className="content">
            <h1> Domi*nous Restaurant Website </h1>{" "}
            <p>
            This is a meat restaurant website where people can order 
            for the type of meat they are interested in.{" "}
            </p>{" "}
            <p>
              Built with:
              <span> HTML, CSS, Ruby, Ruby On Rails, Material UI, Cloudinary </span>{" "}
            </p>{" "}
            <div className="button">
              <a href="https://github.com/Elijahscriptdev/online-store" target="_blank" rel="noopener noreferrer"> View on Github </a> 
              <a href="https://my-restaurant-store.herokuapp.com/" target="_blank" rel="noopener noreferrer"> Live Preview </a>{" "}
            </div>{" "}
            </div>
          </Col>{" "}
          {/* <Col
            className="mx-auto ca"
            xs={12}
            md={5}
            lg={5}
            style={{
              height: "350px",
              margin: 10,
            }}
          >
            <img
              src="https://res.cloudinary.com/elijjaaahhhh/image/upload/v1600277554/ghg_tnnbjt.png"
              alt="img"
            />
          </Col>{" "}
          <Col
            className="mx-auto"
            xs={12}
            md={5}
            lg={5}
            style={{
              height: "350px",
              margin: 10,
            }}
          >
            <div className="content">
            <h1> Clothing Ecommerce Website </h1>{" "}
            <p>
              This is an Ecommerce Website where users can buy mens and womens clothes, hats,
              jackets and sneakers.{" "}
            </p>{" "}
            <p>
              Built with:
              <span> React, Hooks, Firebase, Google Auth. </span>{" "}
            </p>{" "}
            <div className="button">
              <a href="https://github.com/Elijahscriptdev/clothing-ecommerce" target="_blank" rel="noopener noreferrer"> View on Github </a> 
              <a href="https://mary-clothing.netlify.app/" target="_blank" rel="noopener noreferrer"> Live Preview </a>{" "}
            </div>{" "}
            </div>
          </Col>{" "} */}
          <Col
            className="mx-auto"
            xs={12}
            md={5}
            lg={5}
            style={{
              height: "350px",
              margin: 10,
            }}
          >
            <div className="content">
            <h1> BuzzLife </h1>{" "}
            <p>
              BuzzLife is a website with articles about education, business,
              entertaiment, technolgy, sports - anything that you can write
              about.{" "}
            </p>{" "}
            <p>
              Built with:
              <span>
                {" "}
                HTML, CSS, Ruby, Ruby On Rails, SASS, Cloudinary{" "}
              </span>{" "}
            </p>{" "}
            <div className="button">
              <a href="https://github.com/Elijahscriptdev/Buzz_me" target="_blank" rel="noopener noreferrer"> View on Github </a> 
              <a href="https://buzzlife.herokuapp.com/" target="_blank" rel="noopener noreferrer"> Live Preview </a>{" "}
            </div>{" "}
            </div>
          </Col>{" "}
          <Col
            className="mx-auto ca"
            xs={12}
            md={5}
            lg={5}
            style={{
              height: "350px",
              margin: 10,
            }}
          >
            <img
              src="https://res.cloudinary.com/elijjaaahhhh/image/upload/v1590576570/BuzzLife-new_iq2xgh.png"
              alt="img"
            />
          </Col>{" "}
          <Col
            className="mx-auto ca"
            xs={12}
            md={5}
            lg={5}
            style={{
              height: "350px",
              margin: 10,
            }}
          >
            <img
              src="https://res.cloudinary.com/elijjaaahhhh/image/upload/v1597177072/Annotation_2020-08-11_205222_adwggq.png"
              alt="img"
            />
          </Col>{" "}
          <Col
            className="mx-auto"
            xs={12}
            md={5}
            lg={5}
            style={{
              height: "350px",
              margin: 10,
            }}
          >
             <div className="content">
            <h1> Runner </h1>{" "}
            <p>
              Runner is a single player based game. The game is intended to
              determine how fast a player can collect enough stars. The game has
              infinite levels and the player is expected to collect 6000 stars
              to escape.{" "}
            </p>{" "}
            <p>
              Built with:{" "}
              <span> Html, CSS, JavaScript, Phaser 3 and Webpack </span>{" "}
            </p>{" "}
            <div className="button">
              <a href="https://github.com/Elijahscriptdev/Runner" target="_blank" rel="noopener noreferrer"> View on Github </a> 
              <a href="https://runner-rgp-game.netlify.app/" target="_blank" rel="noopener noreferrer"> Live Preview </a>{" "}
            </div>{" "}
            </div>
          </Col>{" "}
          <Col
            className="mx-auto"
            xs={12}
            md={5}
            lg={5}
            style={{
              height: "350px",
              margin: 10,
            }}
          >
            <div className="content">
            <h1> Stay In Touch </h1>{" "}
            <p>
              Stay In Touch is a facebook-clone website where users can signup
              to create posts, make new friends, comment on any post of choice,
              like posts and upload images.{" "}
            </p>{" "}
            <p>
              Built with:
              <span>
                {" "}
                HTML, CSS, Ruby, Ruby On Rails, SASS, Cloudinary{" "}
              </span>{" "}
            </p>{" "}
            <div className="button">
              <a href="https://github.com/Elijahscriptdev/ror-social-scaffold" target="_blank" rel="noopener noreferrer"> View on Github </a> 
              <a href="https://stayintouchwithme.herokuapp.com/" target="_blank" rel="noopener noreferrer"> Live Preview </a>{" "}
            </div>{" "}
            </div>
          </Col>{" "}
          <Col
            className="mx-auto ca"
            xs={12}
            md={5}
            lg={5}
            style={{
              height: "350px",
              margin: 10,
            }}
          >
            <img
              src="https://res.cloudinary.com/elijjaaahhhh/image/upload/v1590519363/showpage_gymxfn.png"
              alt="img"
            />
          </Col>{" "}
          <Col
            className="mx-auto ca"
            xs={12}
            md={5}
            lg={5}
            style={{
              height: "350px",
              margin: 10,
            }}
          >
            <img
              src="https://res.cloudinary.com/elijjaaahhhh/image/upload/v1590586716/FireShot_Capture_116_-_TechClub_-_schoolonlinenow.herokuapp.com_jm529j.png"
              alt="img"
            />
          </Col>{" "}
          <Col
            className="mx-auto ca"
            xs={12}
            md={5}
            lg={5}
            style={{
              height: "350px",
              margin: 10,
            }}
          >
            <div className="content">
            <h1> Techclub </h1>{" "}
            <p>
              Techclub is a website for upcoming developers. Users can login and
              enroll for software development courses.{" "}
            </p>{" "}
            <p>
              Built with:
              <span>
                {" "}
                HTML, CSS, Ruby, Ruby On Rails, Material UI, Cloudinary{" "}
              </span>{" "}
            </p>{" "}
            <div className="button">
              <a href="https://github.com/Elijahscriptdev/University_tech_app" target="_blank" rel="noopener noreferrer"> View on Github </a> 
              <a href="https://schoolonlinenow.herokuapp.com/" target="_blank" rel="noopener noreferrer"> Live Preview </a>{" "}
            </div>{" "}
            </div>
          </Col>{" "}
          <Col
            className="mx-auto"
            xs={12}
            md={5}
            lg={5}
            style={{
              height: "350px",
              margin: 10,
            }}
          >
            <div className="content">
            <h1> Personal Blog </h1>{" "}
            <p>
            This is a personal blog website with articles about education, business,
              entertaiment, technolgy, sports.{" "}
            </p>{" "}
            <p>
              Built with:
              <span>
                {" "}
                HTML, CSS, React, Redux, Hooks{" "}
              </span>{" "}
            </p>{" "}
            <div className="button">
              <a href="https://github.com/Elijahscriptdev/react-blog" target="_blank" rel="noopener noreferrer"> View on Github </a> 
              <a href="https://elijah-blog-react.netlify.app" target="_blank" rel="noopener noreferrer"> Live Preview </a>{" "}
            </div>{" "}
            </div>
          </Col>{" "}
          <Col
            className="mx-auto ca"
            xs={12}
            md={5}
            lg={5}
            style={{
              height: "350px",
              margin: 10,
            }}
          >
            <img
              src="https://res.cloudinary.com/elijjaaahhhh/image/upload/v1596468490/FireShot_Capture_021_-_Personal_Blog_-_elijah-blog-react.netlify.app_dyltlm.png"
              alt="img"
            />
          </Col>{" "}
          
        </Row>{" "}
      </Container>{" "}
    </div>
  );
};

export default Projects;
