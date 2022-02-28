import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import OrderForm from './components/OrderForm';
import Home from './components/Home';
import orderFormSchema from './validation/orderFormSchema';

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  olives: false,
  peppers: false,
  specialText: ''
}

const initialFormErrors = {
  name: '',
  size: '',
  specialText: ''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/orders")
      .then(res => {
        console.log(res);
        console.log("New order created: ", newOrder)
        // setOrder(res);
      })
      .catch(err => console.error(err));
  }

  const validate = (name, value) => {
    yup.reach(orderFormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}));
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      olives: formValues.olives,
      peppers: formValues.peppers,
      specialText: formValues.specialText.trim()
    }

    postNewOrder(newOrder);
  }

  return (
    <>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link id="order-pizza" to={"/pizza"}>Order Now</Link>
      </nav>

      <Switch>
        <Route path="/pizza">
          <OrderForm 
            values={ formValues }
            change={ inputChange }
            submit={ formSubmit }
            errors={ formErrors }
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
