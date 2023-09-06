import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles';


/*
Types of button required in project
1. default
2. Inverted
3. Google sign in
*/

export const BUTTON_TYPES_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) => (
    {
        [BUTTON_TYPES_CLASSES.base]: BaseButton,
        [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPES_CLASSES.inverted]: InvertedButton
    }[buttonType]
)

const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <div>
            <CustomButton
                {...otherProps}
            >
                {children}
            </CustomButton>
        </div>
    );

}

export default Button;