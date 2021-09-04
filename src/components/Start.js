import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Start() {
    const history = useHistory();
    return (
        <>
            <h3> Home  </h3>
            <Button variant="outline-warning" size="lg" onClick={() => history.push('./Home')}> Home
            </Button>
        </>
    )
}

export default Start;