import React from 'react';

export default function OrderForm(props) {
    const { 
        values,
        change,
        submit,
        errors
    } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form id="pizza-form" onSubmit={ onSubmit }>
            <h2>Pizza Form</h2>

            <label>Name:
                <input 
                    type="text"
                    id="name-input"
                    name="name"
                    onChange={ onChange }
                    value={ values.name }
                />
            </label>

            <label>Size:
                <select id="size-dropdown"
                    onChange={ onChange }
                    value={ values.size }
                    name="size"
                >
                    <option value="">- Select a size -</option>
                    <option value="large">Large</option>
                    <option value="medium">Medium</option>
                    <option value="small">Small</option>
                </select>
            </label>

            <div>
                <label>Pepperoni
                    <input 
                        type="checkbox"
                        name="pepperoni"
                        checked={ values.pepperoni }
                        onChange={ onChange }
                    />
                </label>
                <label>Sausage
                    <input 
                        type="checkbox"
                        name="sausage"
                        checked={ values.sausage }
                        onChange={ onChange }
                    />
                </label>
                <label>Olives
                    <input 
                        type="checkbox"
                        name="olives"
                        checked={ values.olives }
                        onChange={ onChange }
                    />
                </label>
                <label>Peppers
                    <input 
                        type="checkbox"
                        name="peppers"
                        checked={ values.peppers }
                        onChange={ onChange }
                    />
                </label>
            </div>

            <label>Special Instructions:
                <input 
                    type="text"
                    id="special-text"
                    name="specialText"
                    value={ values.specialText }
                    onChange={ onChange }
                />
            </label>

            <div className="errors">
                <div>{ errors.name }</div>
            </div>

            <button id="order-button">Submit</button>
        </form>
    )
}