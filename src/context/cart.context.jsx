import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // Does your cardItem already have product that we are adding
    const existence = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )

    // if already exists then increment its quantity by 1
    if (existence) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // if new cartItem add product to add in cartItem and return that array
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemDetails) => {
    // Does the cart-item exists?
    const exisitingItem = cartItems.find((cartItem) => cartItem.id === cartItemDetails.id);

    // if it exists and it quantity is 1 then remove the item from cartItems array
    if (exisitingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemDetails.id);
    }

    // if quantity is more than one lets decrement it by 1
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemDetails.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
}

const deleteCartItem = (cartItems, productToDelete) => {
    return cartItems.filter(cartItem => cartItem.id !== productToDelete.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => null,
    cartItems: [],
    addItemToCart: () => { },
    totalItems: 0,
    removeItemToCart: () => { },
    deleteItemToCart: () => { },
    cartTotal: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemToCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const deleteItemToCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete));
    }

    useEffect(() => {
        const reTotalItems = cartItems.reduce((total, item) =>
            total + item.quantity,
            0
        );

        setTotalItems(reTotalItems);
    }, [cartItems])

    useEffect(() => {
        const finalAmount = cartItems.reduce((total, item) =>
            total + item.quantity * item.price,
            0
        );

        setCartTotal(finalAmount);
    }, [cartItems])

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        totalItems,
        removeItemToCart,
        deleteItemToCart,
        cartTotal,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}