import React, { createContext, useEffect, useReducer, useState } from "react";
import productData from "../data/ProductDetails";

const ShopKartContext = createContext();


function cartReducer(state, action) {

  switch (action.type) {

    case "ADD_ITEM": {

      const existingItem = state.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {

        return state.map((item) =>
          item.id === action.payload.id
            ? {
              ...item,
              quantity: item.quantity + 1
            }
            : item
        );

      }

      return [
        ...state,
        {
          ...action.payload,
          quantity: 1
        }
      ];
    }


    case "INCREASE_QUANTITY":

      return state.map((item) =>
        item.id === action.payload
          ? {
            ...item,
            quantity: item.quantity + 1
          }
          : item
      );


    case "DECREASE_QUANTITY":

      return state
        .map((item) =>
          item.id === action.payload
            ? {
              ...item,
              quantity: item.quantity - 1
            }
            : item
        )
        .filter((item) => item.quantity > 0);


    case "REMOVE_ITEM":

      return state.filter(
        (item) => item.id !== action.payload
      );


    case "CLEAR_CART":

      return [];


    case "LOAD_CART":

      return action.payload;


    default:

      return state;
  }
}


function ShopKartProvider({ children }) {

  const [cart, dispatch] = useReducer(cartReducer, []);

  const [userName, setUserName] = useState("");


  const [cartLoaded, setCartLoaded] = useState(false);

  const [products, setProducts] = useState([]);

  const [productDetails, setProductDetails] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");




  useEffect(() => {

    const savedCart =
      localStorage.getItem("cart");

    if (savedCart) {

      dispatch({
        type: "LOAD_CART",
        payload: JSON.parse(savedCart)
      });

    }

    setCartLoaded(true);

  }, []);


  useEffect(() => {

    if (!cartLoaded) {
      return;
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart, cartLoaded]);


  useEffect(() => {
    setProducts(productData);
    setProductDetails(productData);
    setLoading(false);
  }, []);


  return (
    <ShopKartContext.Provider
      value={{
        cart,
        dispatch,
        userName,
        setUserName,
        products,
        setProducts,
        productDetails,
        setProductDetails,
        loading,
        error
      }}
    >

      {children}

    </ShopKartContext.Provider>
  );
}


export { ShopKartContext, ShopKartProvider };
