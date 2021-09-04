import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

// import ViewOrder from './ViewOrder';
// import PlaceOrder from './PlaceOrder';
// import CancelOrder from './CancelOrder';

function Home() {
    const history = useHistory();

    return (
        <>
            <br />
            <div className="btnCon">
                <div className="d-grid gap-2 container">
                    <Button variant="outline-warning" size="lg" onClick={() => history.push('./ViewOrder')}> View Order
                    </Button>
                    <Button variant="outline-warning" size="lg" onClick={() => history.push('./PlaceOrder')}> Place Order
                    </Button>
                    <Button variant="outline-warning" size="lg" onClick={() => history.push('./CancelOrder')}> Cancel Order
                    </Button>
                </div>
            </div>


        </>
    )
}

export default Home;