import { createContext, useState } from "react"

//contexto
export const ShoppiCartContext = createContext()

//componente
export const ShoppiCartProvider = ({children}) => {
    //shopping card count 
    const [count, setCount] = useState(0)

    //open - close card
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //product detail - show product
    const [productToShow, setProductToShow] = useState({})

    return (
        //proveedor
        <ShoppiCartContext.Provider value={{
            count,
            setCount, 
            openProductDetail,
            closeProductDetail, 
            isProductDetailOpen, 
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppiCartContext.Provider>
    )
}