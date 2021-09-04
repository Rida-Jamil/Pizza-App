import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function PlaceOrder() {
    const history = useHistory();
    return (
        <>
            <h3>What do you Like? </h3>
            <Button variant="outline-warning" size="lg" onClick={() => history.push('./ViewOrder')}> View Order
            </Button>
            <Button variant="outline-warning" size="lg" onClick={() => history.goBack()}> Go Back </Button>
        </>
    )
}

export default PlaceOrder;