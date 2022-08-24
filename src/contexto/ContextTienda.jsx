import React, { createContext, useReducer, useContext } from 'react';

const ComponentDispatchContext = createContext();

const ComponentStateContext = createContext();

const ComponentStateAnyContext = createContext();

const initialValue = {
    listProducts: [],
    discount: false
};

const newListProducts = (productItem, listProducts) => {
    const productDuplicate = listProducts.find(product => product.id === productItem.id)
    return productDuplicate
        ? [...listProducts.filter(item => item.id !== productDuplicate.id), { ...productDuplicate, count: productDuplicate.count + 1 }]
        : [...listProducts, { ...productItem, count: 1 }]
}

const reducer = (state, action) => {
    const { type, productItem } = action;
    const { listProducts } = state

    switch (type) {
        case 'ADD_PRODUCT': {
            return {
                ...state,
                listProducts: newListProducts(productItem, listProducts)
            };
        }

        case 'GET_PRODUCTS':
            return {
                ...state,
                listProducts: listProducts
            };
        case 'CLEAR_LIST_PRODUCTS':
            return {
                ...state,
                listProducts: []
            };
        default:
            return state;
    }
};

const ContextComponent = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    // const valor = 5;
    return (
        <ComponentStateContext.Provider value={state}>
            <ComponentDispatchContext.Provider value={dispatch}>
                {/* <ComponentStateAnyContext.Provider value={valor}> */}
                {children}
                {/* </ComponentStateAnyContext.Provider> */}
            </ComponentDispatchContext.Provider>
        </ComponentStateContext.Provider>
    );
};

const useComponentDispatchContext = () => {
    const dispatch = useContext(ComponentDispatchContext);
    if (!dispatch) {
        console.log("err context");
        return false;
        // throw Error('Must set dispatch provider');
    }
    return dispatch;
};

const useComponentStateContext = () => {
    const state = useContext(ComponentStateContext);
    if (!state) {
        console.log("err context");
        return false;
        // throw Error('Must set dispatch provider');
    }
    return state;
};

export { ContextComponent, useComponentDispatchContext, useComponentStateContext, ComponentStateAnyContext };
