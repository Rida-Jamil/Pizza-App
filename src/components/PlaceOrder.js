import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function PlaceOrder() {
    const history = useHistory();
    const [crust, setCrust] = useState('');
    const [flavor, setFlavor] = useState('');
    const [size, setSize] = useState('');

    const onChangeCrust = (event) => {
        setCrust(event.target.value);
    }

    const onChangeFlavor = (event) => {
        setFlavor(event.target.value);
    }

    const onChangeSize = (event) => {
        setSize(event.target.value);
    }

    const handleClick = () => {
        console.log(crust, flavor, size);
        if (crust === "" || flavor === "" || size === "") {
            alert('please select appropriate options')
        }
        else {
            let pizzaObject = {
                "Flavor": flavor,
                "Crust": crust,
                "Size": size,
                "Table_No": 9,
            }

            let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzE0NDUwMDYsIm5iZiI6MTYzMTQ0NTAwNiwianRpIjoiY2ZhMzEyNDctMTVhZS00MmM5LWEzMDEtMWRlNmQ4MDY4YTE3IiwiZXhwIjoxNjMxNDQ1OTA2LCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.oY7J-ntVCIP26It97GsrJcis34zXoOmuy5QQXpBJYSo";

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(pizzaObject)
            };

            fetch(`https://order-pizza-api.herokuapp.com/api/orders`, requestOptions)
                .then(response => {
                    if (response.status === 201) {
                        alert('Your order has been registered')
                    }
                })
        }
    }


    return (
        <>
            <h3>What do you Like? </h3>
            
            <label for="cars">Crust:</label>
            <select name="crust" onChange={onChangeCrust}>
                <option value="Select" selected> Select </option>
                <option value="STUFFED">Stuffed</option>
                <option value="CRACKER">Cracker</option>
                <option value="THIN">Thin</option>
            </select>
            <label for="flavor">Flavor:</label>
            <select name="flavor" onChange={onChangeFlavor}>
                <option value="Select" selected> Select </option>
                <option value="FAJITA">Fajita</option>
                <option value="CHEESE">Cheese</option>
                <option value="VEGGIE">Veggie</option>
            </select>
            <label for="size">Size:</label>
            <select name="size" onChange={onChangeSize}>
                <option value="Select" selected> Select </option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
            </select>

            <Button variant="outline-warning" size="lg" onClick={handleClick}>Click here</Button>
            <Button variant="outline-warning" size="lg" onClick={() => history.goBack()}> Go Back </Button>
        </>
    )
}

export default PlaceOrder;