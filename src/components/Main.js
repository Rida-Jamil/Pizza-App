import React from "react";
import {Image, Row, Col, Container} from 'react-bootstrap'
import PizzaVeg from '../img/pizza1.jpg';
import PizzaIt from '../img/pizza3.jpg';
import PizzaOnion from '../img/pizza4.jpg';
// import './Main.css';


function Main(){
    return (
        <>
            <div className="spectaclePizza">
                <div className="inside">
                    <h1>Spectacle Pizza</h1>
                    <p >We offer an amazing variety of delicious pizza in town.</p>
                </div>
            </div>

            <div className="italianPizza">
                <div className="insideItalian">
                    <h1>The real Italian Flavour</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="italianImg">
                </div>
            </div>

            <div className="flavors">
                <div className="flavorHeading">
                    <h1>Our Flavours</h1>
                </div>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={PizzaOnion} roundedCircle />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={PizzaVeg} roundedCircle />
                        </Col>
                        <Col xs={6} md={4}>
                            <Image src={PizzaIt} roundedCircle />
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Main;