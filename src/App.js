// Styling import
import "./App.css";

// React Router Imports
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Custom Imports
// import Blog from "./components/blog/blog";
import Layout from "./components/layout/layout";
import SignIn from "./components/user-auth/sign-in/sign-in";
import SignUp from "./components/user-auth/sign-up/sign-up";
import AuthLayout from "./components/layout/auth-layout/auth-layout";
import PageNotFound from "./components/page-not-found/page-not-found";
import UserDashboard from "./components/user-dashboard/user-dashboard";
import PagesLayout from "./components/layout/pages-layout/pages-layout";
import ForgetPassword from "./components/user-auth/forget-password/forget-password";
import ShopPage from "./components/shop-page/shop-main-page/shop-main-page";
import ShopList from "./components/shop-page/shop-list/shop-list";
import ProductDetail from "./components/shop-page/product-detail/product-detail";
import ShopWishlist from "./components/shop-page/shop-wishlist/shop-wishlist";
import ShopCart from "./components/shop-page/shop-cart/shop-cart";
import Checkout from "./components/shop-page/checkout/checkout";
import StoreGrid from "./components/store-page/store-grid/store-grid";
import StoreSingle from "./components/store-page/store-single/store-single";
import BlogSingle from "./components/pages-page/blog-single/blog-single";
import Blog from "./components/pages-page/blog/blog";



function App() {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "",
          element: <UserDashboard />,
        },
        // {
        //   path: "blogs",
        //   element: <Blog />,
        // },
      ],
    },
    {
      path:"/pages/",
      element:<PagesLayout/>,
      children:[
        {
          path:"shop",
          element:<ShopPage/>,
        },
        {
          path:"shop-list",
          element:<ShopList/>,
        },
        {
          path:"product-detail/:productId",
          element:<ProductDetail/>,
        },
        {
          path:"shop-wishlist",
          element:<ShopWishlist/>,
        },
        {
          path:"shop-cart",
          element:<ShopCart/>,
        },
        {
          path:"checkout",
          element:<Checkout/>,
        },
        {
          path:"store-grid",
          element:<StoreGrid/>,
        },
        {
          path:"store-single",
          element:<StoreSingle/>,
        },
        {
          path:"blog",
          element:<Blog/>,
        },
        {
          path:"blog-single",
          element:<BlogSingle/>,
        },
        
      ]

    },
    {
      path: "/auth/",
      element: <AuthLayout />,
      children: [
        {
          path: "sign-in",
          element: <SignIn />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
        {
          path: "forget-password",
          element: <ForgetPassword />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
}

export default App;
