import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./styles/main.css"
import Home from "./pages/home"
import Contact from "./pages/contact"
import ErrorPage from "./pages/erorr"
import Auth from "./pages/auth"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/*",
        element: <ErrorPage />,
      },
      {
        path: "news",
      },
      {
        path: "price",
      },
      {
        path: "map",
      },
      {
        path: "contacts",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
])

root.render(<RouterProvider router={router} />)
