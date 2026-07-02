import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import SignIn from '../src/components/SignIn.jsx';
import SignUp from '../src/components/SignUp.jsx';

const router = createBrowserRouter([
  {path: '/', Component: App},
  {path: '/sign_in', Component: SignIn},
  {path: '/sign_up', Component: SignUp}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)