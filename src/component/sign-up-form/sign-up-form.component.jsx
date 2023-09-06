import { useState } from "react";
import {
    createAuthWithUserAndPassword,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase-utils';
import FormInput from "../form-input/form-input.component";
import { SignUpContainer } from './sign-up-form.styles';
import Button from "../Button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formField;

    const resetFormField = () => {
        setFormField(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!(password === confirmPassword)) {
            alert("Password doesn't match.")
            return;
        }

        try {
            const { user } = await createAuthWithUserAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });

            resetFormField();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('cannot create user, email already exists');
            } else if (error.code === 'auth/weak-password') {
                alert('Password should be at least 6 characters');
            } else {
                console.log('error in creation of an user', error.message);
            }
        }
    }

    return (
        <SignUpContainer>
            <h2>I do not have a account</h2>
            <span>Sign up with your email and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    required={true}
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                />

                <FormInput
                    label='Email'
                    required={true}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />

                <FormInput
                    label='Password'
                    required={true}
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />

                <FormInput
                    label='Confirm Password'
                    required={true}
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                />

                <Button type="submit">SIGN UP</Button>
            </form>
        </SignUpContainer>
    );
}

export default SignUpForm;