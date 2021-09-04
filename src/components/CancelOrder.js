import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function CancelOrder() {
    const history = useHistory();
    return (
        <>
            <h3>Cancel Orders List</h3>
            <Button variant="outline-warning" size="lg" onClick={() => history.goBack()}> Go Back </Button>
        </>
    )
}

export default CancelOrder;