import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './Providers/AuthProvider';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Aos from 'aos';
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
]);


Aos.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-xl	mx-auto lg:px-0 md:px-0 px-5'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
      
    </AuthProvider>


  </StrictMode>,
)
