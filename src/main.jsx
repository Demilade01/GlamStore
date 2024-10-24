import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './context/ProductContext.jsx'
import SidebarProvider from './context/SidebarContext.jsx'
import CartProvider from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <StrictMode>
          <App />
        </StrictMode>,
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
)
