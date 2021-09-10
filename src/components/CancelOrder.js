import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const tablestyle = {
    color: "orange",
};

function CancelOrder() {
    const history = useHistory();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`https://order-pizza-api.herokuapp.com/api/orders`, requestOptions)
            .then(response => response.json())
            .then(data => setOrders(data))
    },
        []);

    const onClickCancel = (Order_ID) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(`https://order-pizza-api.herokuapp.com/api/orders/${Order_ID}`, requestOptions)
            .then(response => {
                if (response.status === 200) {
                    alert('Cancelled successfully')
                }
                window.location.reload();
            })
    }

    return (
        <>
            <h3>Cancel Orders List</h3>
            <Table striped bordered hover variant="warning" style={tablestyle}>
                <thead>
                    <tr>
                        <th>Order ID#</th>
                        <th>Crust</th>
                        <th>Flavour</th>
                        <th>Size</th>
                        <th>Time Stamp</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((v, i) => {
                        return (
                            <tr key={i}>
                                <td>{v.Order_ID}</td>
                                <td>{v.Crust}</td>
                                <td>{v.Flavor}</td>
                                <td>{v.Size}</td>
                                <td>{v.Timestamp}</td>
                                <td><Button variant="outline-warning" size="md" onClick={() => onClickCancel(v.Order_ID)}>Cancel Order</Button></td>
                            </tr>
                        )
                    }
                    )
                    }
                </tbody>
            </Table>

            <Button variant="outline-warning" size="lg" onClick={() => history.goBack()}> Go Back </Button>

        </>
    )
}

export default CancelOrder;

