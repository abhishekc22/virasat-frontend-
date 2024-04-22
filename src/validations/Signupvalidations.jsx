import * as Yup from 'yup';

const signupschema = Yup.object().shape({
username: Yup.string()
    .min(3, 'username must be at least 3 characters')
    .required('username is required'),
email: Yup.string()
    .email('Invalid email address')
    .required('email is required'),
password: Yup.string()
    .min(6, 'password must be at least 6 characters')
    .required('password is required'),
conformpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default signupschema;
