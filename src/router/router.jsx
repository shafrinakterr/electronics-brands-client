import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../component/mainlayOut/MainlayOut";
import Home from "../component/pages/home/Home";
import About from "../component/pages/about/About ";
import Contact from "../component/pages/contact/Contact";
import AddProduct from "../component/pages/AddProduct/AddProduct";
import MyCart from "../component/pages/myCart/MyCart";
import Login from "../login/Login";
import Register from "../register/Register";
import Details from "../component/pages/details/Details";
import Upadate from "../component/pages/update/Upadate";
import OurBrand from "../component/pages/ourBrand/OurBrand";
import ErrorPage from "../component/pages/error/ErrorPage";
import ProductDetails from "../component/pages/ProductDetails/ProductDetails";
import PrivateRouters from "../privateRouters/PrivateRouters";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainlayOut></MainlayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://electronics-server-drab.vercel.app/brand')
      },
      {
        path: '/product',
        element: <OurBrand></OurBrand>,
        loader: () => fetch('https://electronics-server-drab.vercel.app/brand')
      },
      {
        path: '/mycart',
        element:<PrivateRouters><MyCart></MyCart></PrivateRouters>,
        loader: () => fetch('https://electronics-server-drab.vercel.app/cart')


      },
      {
        path: '/addProduct',
        element: <PrivateRouters><AddProduct></AddProduct></PrivateRouters>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details/:brand',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`https://electronics-server-drab.vercel.app/product/${params.brand}`)
      },
      {
        path: '/update/:id',
        element: <Upadate></Upadate>,
        loader: ({ params }) => fetch(`https://electronics-server-drab.vercel.app/products/${params.id}`)
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`https://electronics-server-drab.vercel.app/products/${params.id}`)
      }

    ]
  },
]);

export default router;
