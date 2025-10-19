import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import { RouterProvider, createBrowserRouter} from 'react-router'

const router = createBrowserRouter([
  {path: '/', Component: App},
  {path: '*', Component: ErrorPage}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
