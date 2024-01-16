import { createContext, useState } from "react"

//contexto
export const ShoppiCartContext = createContext()

//componente
export const ShoppiCartProvider = ({children}) => {
    //shoppi card count 
    const [count, setCount] = useState(0)

    //open - close product detail card
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //product detail - show product
    const [productToShow, setProductToShow] = useState({})

    // Shoppi Cart · Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    return (
        //proveedor
        <ShoppiCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
            {children}
        </ShoppiCartContext.Provider>
    )
}