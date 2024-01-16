import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppiCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/clothes', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/furnitures', element: <Home /> },
    { path: '/toys', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/MyAccount', element: <MyAccount/> },
    { path: '/MyOrder', element: <MyOrder/> },
    { path: '/MyOrders', element: <MyOrders/> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/Sign-in', element: <SignIn/> },
    { path: '/*', element: <NotFound/> },
  ])
  return routes
}

const App = () => {
  return (
    <ShoppiCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar/>
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppiCartProvider>
    
  )
}

export default App
