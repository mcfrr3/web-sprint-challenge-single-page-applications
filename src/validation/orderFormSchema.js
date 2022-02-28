import * as yup from 'yup';

const orderFormSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .required(),
    pepperoni: yup
        .boolean(),
    sausage: yup
        .boolean(),
    olives: yup
        .boolean(),
    peppers: yup
        .boolean(),
    specialText: yup
        .string()
    
});

export default orderFormSchema;