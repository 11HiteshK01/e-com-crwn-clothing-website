import { useContext } from 'react';
import {
    ProductCardContainer,
    Footer,
    Name,
    Price
} from './product-card.styles';
import Button, { BUTTON_TYPES_CLASSES } from '../Button/button.component';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => {
        addItemToCart(product);
    }
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button
                buttonType={BUTTON_TYPES_CLASSES.inverted}
                onClick={addProductToCart}
            >Add to card
            </Button>
        </ProductCardContainer>
    );
}

export default ProductCard;