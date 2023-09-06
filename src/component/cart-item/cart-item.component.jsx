import {
    CartItemContainer,
    ItemImage,
    ItemDetails,
    ItemName
} from './cart-item.styles';

const CartItem = ({ cartItems }) => {
    const { name, quantity, imageUrl, price } = cartItems;

    return (
        <CartItemContainer>
            <ItemImage src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <ItemName>{name}</ItemName>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
}

export default CartItem;