import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Home from './Home'
import GoodPage from './GoodPage'
import HomeContent from './HomeContent'
import Cart from './Cart'
import Favourites from './Favourites'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "/",
          element: <HomeContent></HomeContent>
        },
        {
          path: "/goods/:goodID",
          element: <GoodPage />
        },
        {
          path: "/basket",
          element: <Cart></Cart>
        },
        {
          path: "/favs",
          element: <Favourites></Favourites>
        }
      ]
    },

  ], {
    basename:"/mohen-tohen"
  });

  return (
    <RouterProvider router={router}>
    </RouterProvider>
    // <>
    //   <Header></Header>
    //   <main>
    //     <Outlet></Outlet>
    //   </main>
    //   <Footer></Footer>
    // </>
  )
}

export default App