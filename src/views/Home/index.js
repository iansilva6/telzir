import React, { useEffect, useState } from 'react';

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

    // Values to calc
    const values = [
        { 'origem': '011', 'destino': '016', 'valor': 1.90 },
        { 'origem': '016', 'destino': '011', 'valor': 2.90 },
        { 'origem': '011', 'destino': '017', 'valor': 1.70 },
        { 'origem': '017', 'destino': '011', 'valor': 2.70 },
        { 'origem': '011', 'destino': '018', 'valor': 0.90 },
        { 'origem': '018', 'destino': '011', 'valor': 1.90 }
    ];

    // States
    const [origin, setOrigin] = useState("011");
    const [destiny, setDestiny] = useState("011");
    const [minutes, setMinutes] = useState(0);
    const [plan, setPlan] = useState(30);

    // Functions
    function handleChange(prop, event) {
        if (prop === 'origin') {
            setOrigin(event.target.value);
        }
        if (prop === 'destiny') {
            setDestiny(event.target.value);
        }
        if (prop === 'minutes') {
            setMinutes(event.target.value);
        }
        if (prop === 'plan') {
            setPlan(event.target.value);
        }
    }

    function calculatePlan() {
        const getFee = values.find(value => value.origem === origin && value.destino === destiny);
        if (getFee) {
            let withoutPlan = minutes * getFee.valor;
            let withPlan = (minutes - plan) * getFee.valor;
            console.log("Com plano: " + withPlan + " | Sem plano: " + withoutPlan);
        } else {
            //Error
        }
    }

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
                                <Form.Control as="select" onChange={(e) => handleChange('origin', e)}>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="018">018</option>
                                </Form.Control>
                            </Col>
                            <Col sm={3}>
                                <Label>DDD de destino:</Label>
                                <Form.Control as="select" onChange={(e) => handleChange('destiny', e)}>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="018">018</option>
                                </Form.Control>
                            </Col>
                            <Col sm={3}>
                                <Label>Tempo:</Label>
                                <Input placeholder={"Minutos"} type={"number"} onChange={(e) => handleChange('minutes', e)}></Input>
                            </Col>
                            <Col sm={3}>
                                <Label>Plano:</Label>
                                <Form.Control as="select" onChange={(e) => handleChange('plan', e)}>
                                    <option value="30">FaleMais 30</option>
                                    <option value="60">FaleMais 60</option>
                                    <option value="120">FaleMais 120</option>
                                </Form.Control>
                            </Col>
                            <Col sm={12} className={"center"}>
                                <Button 
                                    text="Simular"
                                    actionFunction={calculatePlan}
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
