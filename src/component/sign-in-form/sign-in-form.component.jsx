import { useState } from "react";
import {
    signInWithGooglePopup,
    signInAuthWithUserAndPassword
} from '../../utils/firebase/firebase-utils';
import FormInput from "../form-input/form-input.component";
import { SignInContainer, ButtonContainer } from './sign-in-form.styles';
import Button, { BUTTON_TYPES_CLASSES } from "../Button/button.component";

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [formField, setFormField] = useState(defaultFormFields);
    const { email, password } = formField;

    const resetFormField = () => {
        setFormField(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthWithUserAndPassword(email, password);
            resetFormField();
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                alert('No user associated with this email')
            } else if (error.code === 'auth/wrong-password') {
                alert('Incorrect password for email!')
            } else {
                console.log('error', error.message);
            }
        }
    }

    const GoogleSignIn = async () => {
        try {
            const { user } = await signInWithGooglePopup();
        } catch (error) {
            if (error.code === 'auth/popup-closed-by-user') {
                console.log('error 1');
            } else {
                console.log('error 2');
            }
        }
    }

    return (
        <SignInContainer>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit}>

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

                <ButtonContainer>
                    <Button type="submit">SIGN IN </Button>
                    <Button buttonType={BUTTON_TYPES_CLASSES.google} type="button" onClick={GoogleSignIn}>GOOGLE SIGN IN</Button>
                </ButtonContainer>
            </form>
        </SignInContainer>
    );
}

export default SignInForm;