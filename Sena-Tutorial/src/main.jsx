import React from 'react'
import ReactDOM from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax';

import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Index from './pages/Index.jsx'
import Informacion from './pages/Informacion.jsx'
 
 
 




const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        index:true,
        element:<Index />
      },
      {
        path:"informacion",
        element:<Informacion />
      }

    ]
  },
  // {
  //   path:"informacion",
  //   element:<Informacion />
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>

   <RouterProvider router={router} />
   
    </ParallaxProvider>
    
    
  </React.StrictMode>,
)
