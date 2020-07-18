import React from 'react';

//Styles
import { Button } from './styles';

const DefaultButton = (props) => (
    <Button onClick={() => props.actionFunction()}>
        {props.text}
    </Button>
);

export default DefaultButton;