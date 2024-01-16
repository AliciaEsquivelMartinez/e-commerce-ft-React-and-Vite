import { createContext, useState, useEffect } from "react"

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

    // Shopping Cart · Order
    const [order, setOrder] = useState([])

     // Get products
    const [items, setItems] = useState(null)

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    console.log('searchByTitle: ', searchByTitle)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])

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
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShoppiCartContext.Provider>
    )
}