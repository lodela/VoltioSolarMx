import { createBrowserRouter } from "react-router-dom";
import { LayoutPublic } from "../Layout";

import { Home } from "../Pages/Home";
import { Blog } from "../Pages/Blog";
import { AboutUs } from "../Pages/AboutUs";
import { Contact } from "../Pages/Contact";
import { CotizaPaneles } from "../Pages/Cotizador";
import NotFound from "../Components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "nosotros",
        element: <AboutUs />,
      },
      {
        path: "contacto",
        element: <Contact />,
      },
      {
        path: "cotizar",
        element: <CotizaPaneles />,
      },
    ],
  },
]);
