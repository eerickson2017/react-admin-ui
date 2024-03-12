import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// pages
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Producst";
import NavBar from "./componets/navbar/NavBar";
import Menu from "./componets/menu/Menu";
import Footer from "./componets/footer/Footer";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <NavBar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
