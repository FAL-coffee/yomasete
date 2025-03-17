import { createBrowserRouter } from 'react-router-dom'

import Layout from '../components/Layout'
import { BookRegister } from '../pages/BookRegister'
import { Communities } from '../pages/Communities'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Signin } from '../pages/Signin'
import { Signup } from '../pages/Signup'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'signin',
        element: <Signin />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'communities',
        element: <Communities />,
      },
      {
        path: 'books/register',
        element: <BookRegister />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
], {
  future: {
    v7_relativeSplatPath: true,
  },
})
