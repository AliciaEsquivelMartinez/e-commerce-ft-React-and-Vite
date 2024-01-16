import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Cards'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppiCartContext } from '../../Context'

function Home() {
    const context = useContext(ShoppiCartContext)

    const renderView = () => {
        if (context.filteredItems?.length > 0) {
        return (
            context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
            ))
        )
        } else {
        return (
            <div className='flex justify-between'>We don't have anything 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
            </div>
        )
        }
    }

    return (
        <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4'>
            <h1 className='font-medium text-xl'>Exclusive Products</h1>
        </div>
        <input
            type="text"
            placeholder='Search a product'
            className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
            onChange={(event) => context.setSearchByTitle(event.target.value)} />
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {renderView()}
        </div>
        <ProductDetail />
        </Layout>
    )
}

export default Home