import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import User from './components/User.jsx'
import Error from './components/Error.jsx'

const router = createBrowserRouter([
  {path: '/', Component: App},
  {path: '/user/:id', Component: User},
  {path: '*', Component: Error}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)