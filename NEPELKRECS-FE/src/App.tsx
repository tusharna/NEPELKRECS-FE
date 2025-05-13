import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import RootLayout from './pages/RootLayout'
import ErrorComponet from './pages/error'
import UserLayout from './pages/UserLayout'
import UserList, { loader } from './components/UsersList'

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    errorElement: <ErrorComponet />,
    children:
      [
        { index: true, element: <Home /> },
        { path: 'products', element: <Products /> },
        {
          path: 'users', element: <UserLayout />,
          children:
            [
              { index: true, element: <UserList />,loader:loader},
              { path: 'new', element: <div>New User</div> },
            ]
        },
      ]
  },

])
function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
