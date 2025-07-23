import { useState, useCallback, useMemo, useEffect } from "react";
import { CartContext } from "../contexts";
import { withUser } from "../withProvider";
import { getCart, getProducts, saveCart } from "../api";
function CartProvider({ isLoggedIn, children }) {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (isLoggedIn) {
            getCart().then((response) => {
                setCart(response.data);
            })
        } else {
            const savedData = JSON.parse(localStorage.getItem("my-cart") || "{}");
            getProducts(Object.keys(savedData)).then((response) => {
                const savedCart = response.data.map((product) => ({ product: product, quantity: savedData[product.id] }))
                setCart(savedCart);
            })
        }
    }, [isLoggedIn])

    const onCartChange = useCallback((productId, currQuantity) => {
        const quantityMap = cart.reduce((prevMap, cartItem) => ({ ...prevMap, [cartItem.product.id]: cartItem.quantity }),
            {});
        const oldQuantity = quantityMap[productId] || 0;
        const newQuantityMap = { ...quantityMap, [productId]: oldQuantity + currQuantity };
        updateCart(newQuantityMap);
    }, [cart]);
    function updateCart(newQuantityMap) {
        if (isLoggedIn) {
            saveCart(newQuantityMap).then((response) => {
                const map = response.data.reduce((prevMap, currItem) => (
                    { ...prevMap, [currItem.product_id]: currItem.quantity }
                ), {});
                getProducts(Object.keys(map)).then((response) => {
                    const savedCart = response.data.map((product) => ({ product: product, quantity: map[product.id] }))
                    setCart(savedCart);
                })
            });
        } else {
            const myCart = JSON.stringify(newQuantityMap)
            localStorage.setItem("my-cart", myCart);
        }

    }

    const totalQuantity = useMemo(() => {
        const tQ = cart.reduce((prev, curr) => {
            return prev + curr.quantity;
        }, 0)
        return tQ;
    }
        , [cart])

    return (
        <CartContext.Provider value={{ cart, updateCart, onCartChange, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
export default withUser(CartProvider);