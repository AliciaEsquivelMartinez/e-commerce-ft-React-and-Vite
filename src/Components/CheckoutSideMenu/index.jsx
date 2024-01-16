import { useContext } from 'react'
import { ShoppiCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppiCartContext)
    console.log('CART: ', context.cartProducts)

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div className='px-6'>
                {
                context.cartProducts.map(product => (
                    <OrderCard
                    key={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    />
                ))
                }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu