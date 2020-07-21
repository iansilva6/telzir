import React, { useState } from 'react';

// Components
import Button from '../../components/Button';
import Alert from '../../components/Alert';

// Libs
import { Container, Row, Col, Form } from 'react-bootstrap';

// Styles
import { 
    Content, 
    Title, 
    SubTitle,
    Label,
    Input,
    Box,
    BlankMessage
} from './styles';

// Images and Icons
import DangerImage from '../../assets/images/danger.png';

function Home() {

    // Values to calc plans
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
    const [minutes, setMinutes] = useState(null);
    const [plan, setPlan] = useState(30);
    const [withPlan, setWithPlan] = useState("");
    const [withoutPlan, setWithoutPlan] = useState("");
    const [calculateState, setCalculateState] = useState(false);
    const [alertError, setAlertError] = useState(false);
    const [minutesBlank, setMinutesBlank] = useState(false);

    // Functions
    // Handle to save values in states
    function handleChange(prop, event) {
        if (prop === 'origin') {
            setOrigin(event.target.value);
        }
        if (prop === 'destiny') {
            setDestiny(event.target.value);
        }
        if (prop === 'minutes') {
            setMinutes(event.target.value);
            setMinutesBlank(false); // remove blank input error message
        }
        if (prop === 'plan') {
            setPlan(event.target.value);
        }
    }

    // Function to calc when click on button
    function calculatePlan() {
        // Check if user left the minutes blank
        if (minutes) {
            // Find fee value to origin from destiny
            const getFee = values.find(value => value.origem === origin && value.destino === destiny);

            if (getFee) {

                // Calculate value with and without plan
                let withoutPlan = minutes * getFee.valor;
                let withPlan = ((minutes - plan) * getFee.valor) * 1.10;

                // Conditional to not show negatives values 
                if (withPlan < 0) {
                    withPlan = 0;
                }

                // Save values with and without plan
                setWithPlan(withPlan.toFixed(2));
                setWithoutPlan(withoutPlan.toFixed(2));
                setCalculateState(true); // Show results
            } else {
                //Error
                setAlertError(true);
                setCalculateState(false);
            }
        } else {
            setMinutesBlank(true);
        }
    }

    // Close alert function
    function closeAlert() {
        setAlertError(false);
    }

    function redirect() {
        // action when click "Contrate agora"
    }

    return (
        <>

            <Alert
                show={alertError}
                title={"Ops, tivemos um probleminha..."}
                subtitle={"Infelizmente não possuímos tarifas disponíveis para a origem e destino selecionados. Tente novamente com outra localidade."}
                image={DangerImage}
                actionFunction={closeAlert}
            />

            <Container>
                <Row>
                    <Col sm={12}>
                        <Content>
                            <Row>
                                <Col sm={12}>
                                    <Title>Telzir</Title>
                                    <SubTitle>Simule abaixo nossos planos disponíveis e veja qual mais se adequa a sua necessidade.</SubTitle>
                                </Col>
                                {/* Origin Input */}
                                <Col sm={3}>
                                    <Label>DDD de origem:</Label>
                                    <Form.Control as="select" onChange={(e) => handleChange('origin', e)} data-test="origin-input">
                                        <option value="011">011</option>
                                        <option value="016">016</option>
                                        <option value="017">017</option>
                                        <option value="018">018</option>
                                    </Form.Control>
                                </Col>
                                {/* Destiny Input */}
                                <Col sm={3}>
                                    <Label>DDD de destino:</Label>
                                    <Form.Control as="select" onChange={(e) => handleChange('destiny', e)} data-test="destiny-input">
                                        <option value="011">011</option>
                                        <option value="016">016</option>
                                        <option value="017">017</option>
                                        <option value="018">018</option>
                                    </Form.Control>
                                </Col>
                                {/* Minutes Input */}
                                <Col sm={3}>
                                    <Label>Minutos:</Label>
                                    <Input placeholder={"0"} type={"number"} onChange={(e) => handleChange('minutes', e)} error={minutesBlank} data-test="minutes-input"></Input>
                                    {/* Error message when minutes are blank */}
                                    { minutesBlank ? <BlankMessage>Ops, ta esquecendo de nada?</BlankMessage> : "" }
                                </Col>
                                {/* PlanInput */}
                                <Col sm={3}>
                                    <Label>Plano:</Label>
                                    <Form.Control as="select" onChange={(e) => handleChange('plan', e)}>
                                        <option value="30">FaleMais 30</option>
                                        <option value="60">FaleMais 60</option>
                                        <option value="120">FaleMais 120</option>
                                    </Form.Control>
                                </Col>
                                {/* Button to simule */}
                                <Col sm={12} className={"center"}>
                                    <Button 
                                        text="Simular"
                                        actionFunction={calculatePlan}
                                        data-test="simulate-button"
                                    />
                                </Col>
                                {/* RESULTS */}
                                {
                                    calculateState
                                    ?
                                    <Col sm={12} className={"mt-3"}>
                                        <Row>
                                            {/* With Plan */}
                                            <Col sm={6}>
                                                <Box withPlan={true}>
                                                    <h3>Com Plano FaleMais {plan}</h3>
                                                    <h2 data-test="withplan-label">R$ {withPlan}</h2>
                                                    <div className={"center"}>
                                                        <Button 
                                                            text="Contrate Agora"
                                                            actionFunction={redirect}
                                                        />
                                                    </div>
                                                </Box>
                                            </Col>
                                            {/* Without Plan */}
                                            <Col sm={6}>
                                                <Box withPlan={false}>
                                                    <h3>Sem Plano FaleMais {plan}</h3>
                                                    <h2 data-test="withoutplan-label">R$ {withoutPlan}</h2>
                                                    <div className={"center"}>
                                                        <Button 
                                                            text="Contrate Agora"
                                                            actionFunction={redirect}
                                                        />
                                                    </div>
                                                </Box>
                                            </Col>
                                        </Row>
                                    </Col>
                                    :
                                    ""
                                }
                            </Row>
                        </Content>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Home;
