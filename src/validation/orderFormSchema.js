import * as yup from 'yup';

const orderFormSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'name must be at least 2 characters')
});

export default orderFormSchema;