import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import RootLayout from './pages/RootLayout'
import ErrorComponet from './pages/error'

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    errorElement: <ErrorComponet />,
    children:
      [
        { index: true,element: <Home /> },
        { path: 'products', element: <Products /> }
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
