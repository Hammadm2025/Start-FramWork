import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./Component/About/About"
import Contact from "./Component/Contact/Contact"
import Home from "./Component/Home/Home"
import Portfolio from "./Component/Portfolio/Portfolio"
import Layout from "./Component/Layout/Layout"
import NotFound from "./Component/NotFound/NotFound"


let x = createBrowserRouter ([
  {path:"", element:<Layout/>, children:[

    {index: true, element:<Home/>},
  {path:"about", element:<About/>},
  {path:"portfolio", element:<Portfolio/>},
  {path:"contact", element:<Contact/>},
  {path:"*", element:<NotFound/>},


  ]},
  
])


export default function App() {
  return <>
  
  <RouterProvider router={x}> </RouterProvider>
  {/* <Home/>
  <About/>
  <Contact/>
  <Portfolio/>
  <Layout/> */}
  
  </>
  
}