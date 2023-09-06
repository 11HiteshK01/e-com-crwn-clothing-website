import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles';



const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, totalItems} = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{totalItems}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;