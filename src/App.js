import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
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

  const validate = (name, value) => {
    yup.reach(orderFormSchema, name)
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

    setFormValues(initialFormValues);
    console.log("New order submitted:", newOrder);
  }

  return (
    <>
      <h1>Lambda Eats</h1>
      <nav>
        <Link id="order-pizza" to={"/"}>Home</Link>
        <Link to={"/pizza"}>Order Now</Link>
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
