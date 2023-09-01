import React from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ProjectCard from "../Projects/ProjectCards";
import moviezone from '../../Assets/Projects/moviezone.jpg';
import netflix from '../../Assets/Projects/netflix-clone.jpg';
import ozshop from '../../Assets/Projects/ozshop.png';

function Home3() {
    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={moviezone}
                            isBlog={false}
                            title="Moviezone"
                            description="Moviezone is a film review system to share most liked and reviewed film through college students. From this site we can recommended our friends to watch those movies.Build with react.js, Tailwindcss, and Firebase. Have features which allows user for realtime like, dislike, review, and add movie functionality with search movie by name."
                            ghLink="https://github.com/TilakKhatri/movies-zone"
                            demoLink="https://moviezone-34b4e.web.app//"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={netflix}
                            isBlog={false}
                            title="Netflix Clone"
                            description="One of the site which I really love is Netflix that's the reason I want to create from scratch. So I make clone of Netflix and take movie data from themoviedb API. This website is bulid with Reactjs, Tailwindcss, scass, themoviedb API. Here I use Axio for api calling and figma to design this website."
                            ghLink="https://github.com/TilakKhatri/netflix-clone"
                            demoLink="https://deft-duckanoo-6bbb6f.netlify.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ozshop}
                            isBlog={false}
                            title="Ozshop Ecommerce"
                            description="Online Ecommerce website build with HTML,CSS,JS,PHP & MYSQLI. Online Ecommerce which help shopping with just one click and delivery to door step. This is prototype project for semester project.As a team we worked together and learn so much real life problem and how to tackle them."
                            ghLink="https://github.com/TilakKhatri/OZ-ESHOP"
                            demoLink="http://ozeshop.lovestoblog.com/"
                        />
                    </Col>

                </Row>
                <Button variant="outline-info" className='text-light text-bold'>
                    <Link to='/projects' className="text-light font-weight-bold text-decoration-none ">View more</Link>
                </Button>
            </Container>
        </Container>
    )
}

export default Home3