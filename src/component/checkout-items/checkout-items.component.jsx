import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import {
    CheckoutItemContainer,
    ImageContainer,
    RemoveButton,
    Parameters,
    Quantity,
    Arrow,
    Value,
} from './checkout-items.styles';

const CheckoutItems = ({ cartItem }) => {
    const { deleteItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext);
    const { name, price, quantity, imageUrl } = cartItem;

    const deleteHandler = () => deleteItemToCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Parameters>{name}</Parameters>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <Parameters>{price}</Parameters>
            <RemoveButton onClick={deleteHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItems;