import { createRoot } from 'react-dom/client'
import { Home , About , Contact , Service, Blog} from './pages'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='service' element={<Service />} />
      <Route path='blogs' element={<Blog />} />
    </Route>
  ),
  { basename: '/' } // Add this line
)

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
