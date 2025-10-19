import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import Home from './components/task 02/Home.jsx'
import ContactUs from './components/task 02/ContactUs.jsx'
import Parameters from './components/task 02/Parameters.jsx'
import Error from './components/task 02/Error.jsx'

const router = createBrowserRouter([
  {path: '/', Component: App},
  {path: '/home', Component: Home},
  {path: '/contact-us', Component: ContactUs},
  {path: '/parameters', Component: Parameters},
  {path: '*', Component: Error}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
