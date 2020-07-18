import React, { useEffect } from 'react';

// Components
import Button from '../../components/Button';

// Libs
import { Container, Row, Col, Form } from 'react-bootstrap';

// Styles
import { 
    Content, 
    Title, 
    SubTitle,
    Label,
    Input
} from './styles';

function Home() {

    const values = [
        { 'origem': '011', 'destino': '016', 'valor': 1.90 },
        { 'origem': '016', 'destino': '011', 'valor': 2.90 },
        { 'origem': '011', 'destino': '017', 'valor': 1.70 },
        { 'origem': '017', 'destino': '011', 'valor': 2.70 },
        { 'origem': '011', 'destino': '018', 'valor': 0.90 },
        { 'origem': '018', 'destino': '011', 'valor': 1.90 }
    ];

    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <Content>
                        <Row>
                            <Col sm={12}>
                                <Title>Telzir</Title>
                                <SubTitle>Simule abaixo nossos planos disponíveis e veja qual mais se adequa a sua necessidade.</SubTitle>
                            </Col>
                            <Col sm={3}>
                                <Label>DDD de origem:</Label>
                                <Form.Control as="select">
                                    <option>011</option>
                                    <option>016</option>
                                    <option>017</option>
                                    <option>018</option>
                                </Form.Control>
                            </Col>
                            <Col sm={3}>
                                <Label>DDD de destino:</Label>
                                <Form.Control as="select">
                                    <option>011</option>
                                    <option>016</option>
                                    <option>017</option>
                                    <option>018</option>
                                </Form.Control>
                            </Col>
                            <Col sm={3}>
                                <Label>Tempo:</Label>
                                <Input placeholder={"Minutos"} type={"number"}></Input>
                            </Col>
                            <Col sm={3}>
                                <Label>Plano:</Label>
                                <Form.Control as="select">
                                    <option>FaleMais 30</option>
                                    <option>FaleMais 60</option>
                                    <option>FaleMais 120</option>
                                </Form.Control>
                            </Col>
                            <Col sm={12} className={"center"}>
                                <Button 
                                    text="Simular"
                                />
                            </Col>
                        </Row>
                    </Content>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
