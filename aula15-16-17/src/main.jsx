import { createRoot } from 'react-dom/client' // importando o react-dom para renderizar o componente

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/products'

// configuração de rotas react
const routes = createBrowserRouter([
  {
    path: '/products', 
    element: <Products />
  },

  {
    path: '/',
    element: <Home />
  }
])

createRoot(document.getElementById('root')).render( 
  <>
  <RouterProvider router={routes} />
</>
) // renderizando o componente App no elemento com id root