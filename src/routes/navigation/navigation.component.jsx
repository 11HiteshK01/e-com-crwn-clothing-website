import {
    NaviagationContainer,
    NavLinkContainer,
    LogoContainer,
    NavLinks
} from './navigation.styles';
import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase-utils';
import CartIcon from '../../component/cart-icon/cart-icon.component';
import CartDropdown from '../../component/cart-dropdwon/cart-dropdown.component';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <NaviagationContainer>
                <LogoContainer to='/'>
                    {<CrwnLogo className='logo' />}
                </LogoContainer>
                <NavLinkContainer>
                    <NavLinks to='/'>HOME</NavLinks>
                    <NavLinks to='/shop'>SHOP</NavLinks>
                    {currentUser ? (
                        <NavLinks as='span' onClick={signOutHandler}>SIGN OUT</NavLinks>
                    ) : (
                        <NavLinks to='/auth'>SIGN IN</NavLinks>
                    )}
                    <CartIcon />
                </NavLinkContainer>
                {isCartOpen && <CartDropdown />}
            </NaviagationContainer>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;