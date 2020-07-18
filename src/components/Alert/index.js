import React from 'react';

// Libs
import { Container, Row, Col } from 'react-bootstrap';

//Styles
import { Overflow, Alert, Modal, Buttons } from './styles';

const Term = (props) => (
    props.show
    ?
    <Overflow>
        <Alert>
            <Container>
                <Row className={"justify-content-center"}>
                    <Col xs={12} sm={10} md={8} lg={6}>
                        <Modal>
                            <img className={"img-responsive"} src={props.image} alt="Atenção"></img>
                            <h3>{props.title}</h3>
                            <p>{props.subtitle}</p>
                            <Buttons>
                                <button onClick={() => props.actionFunction()}>Ok!</button>
                            </Buttons>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </Alert>
    </Overflow>
    :
    ""
);

export default Term;