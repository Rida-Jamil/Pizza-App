import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const tablestyle = {
    color: "orange",
  };

function ViewOrder() {
    const history = useHistory();
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch("https://order-pizza-api.herokuapp.com/api/orders")
            .then((response) => {
                console.log(response.json)
                response.json().then((result) => {
                    console.log("result", result)
                    setData(result)
                })
            })
    }, [])


    return (
        <>
            <h3>Orders List</h3>
            <Table striped bordered hover variant="warning" style={tablestyle}>
                <thead>
                    <tr>
                        <th>Order ID#</th>
                        <th>Crust</th>
                        <th>Flavour</th>
                        <th>Time Stamp</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr>
                            <td>{item.Order_ID}</td>
                            <td>{item.Crust}</td>
                            <td>{item.Flavor}</td>
                            <td>{item.Timestamp}</td>
                        </tr>
                    ))
                   }
                </tbody>
            </Table>
            {/* {users.map(user => (
                <div className="container">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Text>
                                <p>Crust: {user.Crust} </p>
                                <p>Flavour: {user.Flavor} </p>
                                <p>Order: {user.Order_ID} </p>
                                {age && <p> Time Stamp: {user.Timestamp} </p>}
                            </Card.Text>
                            <Button variant="success" onClick={() => setAge(!age)}>Show Age</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))
            } */}
            <Button variant="outline-warning" size="lg" onClick={() => history.goBack()}> Go Back </Button>
        </>
    )
}

export default ViewOrder;