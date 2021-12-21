import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Home from './pages/home ';
import Navbar from './pages/Navbar';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Order from './pages/Order';
import NotFound from './pages/Page404';
import ModelAdd from './pages/model';
import Cart from './pages/cart';
import Checkout from './pages/Checkout';
import CheckoutOrder from './pages/checkoutOrder';
import Product from './pages/product';
import ProductCards from './pages/productsCards';
import OneProduct from './pages/oneProduct';
import LoginE from './pages/loginE';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      children: [
        { path: 'oneProduct/:id', element: <OneProduct /> },
        { path: 'cart/:id', element: <Cart /> },
        { path: 'checkout', element: <Checkout /> },
        { path: 'checkoutOrder', element: <CheckoutOrder /> },
        { path: 'product', element: <Product /> },
        { path: 'productsCards', element: <ProductCards /> },
        { path: 'login', element: <LoginE /> }
      ]
    },
    {
      path: '/dashboard/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },

        { path: 'order', element: <Order /> },
        { path: 'products', element: <Products /> },
        { path: 'product/edit/:id', element: <ModelAdd /> }
      ]
    },
    {
      path: '/',
      element: <Home />,
      children: [{ element: <Navigate to="/Home" replace /> }, { path: 'cart', element: <Cart /> }]
    },
    {
      path: '/dashboard/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },

        { path: 'order', element: <Order /> },
        { path: 'products', element: <Products /> },
        { path: 'product/edit/:id', element: <ModelAdd /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/home" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
