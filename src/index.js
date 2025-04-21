import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'select2/dist/js/select2.min.js';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { store } from "./app/store";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePageOne from "./pages/HomePageOne";
import HomePageTwo from "./pages/HomePageTwo";
import HomePageThree from "./pages/HomePageThree";
import ShopPage from "./pages/ShopPage";
import ProductDetailsPageTwo from "./pages/ProductDetailsPageTwo";
import ProductDetailsPageOne from "./pages/ProductDetailsPageOne";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import BecomeSellerPage from "./pages/BecomeSellerPage";
import WishlistPage from "./pages/WishlistPage";
import AccountPage from "./pages/AccountPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import VendorPage from "./pages/VendorPage";
import VendorDetailsPage from "./pages/VendorDetailsPage";
import VendorTwoPage from "./pages/VendorTwoPage";
import VendorTwoDetailsPage from "./pages/VendorTwoDetailsPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <HomePageOne></HomePageOne>,
      },
      {
        path: "/index-two",
        element: <HomePageTwo/>,
      },
      {
        path: "/index-three",
        element: <HomePageThree/>,
      },
      {
        path: "/shop",
        element: <ShopPage></ShopPage>,
      },
      {
        path: "/product-details",
        element: <ProductDetailsPageOne></ProductDetailsPageOne>,
      },
      {
        path: "/product-details-two",
        element: <ProductDetailsPageTwo></ProductDetailsPageTwo>,
      },
      {
        path: "/cart",
        element: <CartPage/>,
      },
      {
        path: "/checkout",
        element: <CheckoutPage/>,
      },
      {
        path: "/become-seller",
        element: <BecomeSellerPage/>,
      },
      {
        path: "/wishlist",
        element: <WishlistPage/>,
      },
      {
        path: "/account",
        element: <AccountPage/>,
      },
      {
        path: "/blog",
        element: <BlogPage/>,
      },
      {
        path: "/blog-details",
        element: <BlogDetailsPage/>,
      },
      {
        path: "/contact",
        element: <ContactPage/>,
      },
      {
        path: "/vendor",
        element: <VendorPage/>,
      },
      {
        path: "/vendor-details",
        element: <VendorDetailsPage/>,
      },
      {
        path: "/vendor-two",
        element: <VendorTwoPage/>,
      },
      {
        path: "/vendor-two-details",
        element: <VendorTwoDetailsPage/>,
      },
     
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>,
);

reportWebVitals();
