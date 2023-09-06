import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';
import {
    CartDropdownContainer,
    CartItems,
    EmptyMessage
} from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item.component';
import Button from '../Button/button.component';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    const navigate = useNavigate();
    const gotoCheckout = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ?
                        (cartItems.map(item => <CartItem cartItems={item} key={item.id} />))
                        : (
                            <EmptyMessage>Your cart is empty</EmptyMessage>
                        )
                }
            </CartItems>
            <Button onClick={gotoCheckout}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;