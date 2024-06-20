import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter(item => item._id !== action.payload._id);
        case 'INCREMENT_QUANTITY':
            return state.map(item =>
                item._id === action.payload._id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        case 'DECREMENT_QUANTITY':
            return state.map(item =>
                item._id === action.payload._id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);
    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

