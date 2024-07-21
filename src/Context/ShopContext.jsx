import React, { createContext } from "react";
import { useState } from "react";
import all_product from "../Components/Assets/all_product";
export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart ={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]= 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [cartItems,setcartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) => {
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));  
        console.log(cartItems);
    }

    const removeFromCart = (itemId)=> {
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            //console.log('hii');

            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            //console.log(totalAmount);
        }
        return totalAmount;

    }
    const getTotalCartItems = () =>{
        let totalItems =0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItems+= cartItems[item];
            }
        }
        return totalItems;
    }
    const contextValue= {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

    return(<ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
        )
}

export default ShopContextProvider;