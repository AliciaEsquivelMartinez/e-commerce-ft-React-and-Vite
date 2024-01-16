import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppiCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/MyAccount', element: <MyAccount/> },
    { path: '/MyOrder', element: <MyOrder/> },
    { path: '/MyOrders', element: <MyOrders/> },
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
      </BrowserRouter>
    </ShoppiCartProvider>
    
  )
}

export default App
