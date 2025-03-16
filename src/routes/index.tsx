import { createBrowserRouter } from 'react-router-dom'

import Layout from '../components/Layout'
import { Auth } from '../pages/Auth'
import { BookRegister } from '../pages/BookRegister'
import { Communities } from '../pages/Communities'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'

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
        path: 'auth',
        element: <Auth />,
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
