import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./styles/main.css"
import Home from "./pages/home"
import Contact from "./pages/contact"
import ErrorPage from "./pages/erorr"
import Auth from "./pages/auth"
import Registration from "./pages/registration"
import News from "./pages/news"
import NewsDescription from "./pages/newsDescription"
import RegistrationMessage from "./pages/registrationMessage"
import { Provider } from "react-redux"
import store from "./store"
import Main from "./pages/main"
import Flats from "./pages/flats"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <Home />
      </Provider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/*",
        element: <ErrorPage />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:id",
        element: <NewsDescription />,
      },
      {
        path: "flats",
        element: <Flats />,
      },
      {
        path: "contacts",
        element: <Contact />,
      },
      {
        path: "main",
        element: <Main />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/registration/message",
    element: <RegistrationMessage />,
  },
])

root.render(<RouterProvider router={router} />)
