import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Home from './Home'
import GoodPage from './GoodPage'
import HomeContent from './HomeContent'
import Cart from './Cart'
import Favourites from './Favourites'
import SellerPage from './SellerPage'
import Account from './Account'
import HistoryGoods from './HistoryGoods'
import Settings from './Settings'
import ApplicationForm from './AppliactionForm'

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
          path: "brands/:brandID",
          element: <SellerPage></SellerPage>,
        },
        // {
        //   path: "/favs",
        //   element: <Favourites></Favourites>
        // },
        {
          path: "/profile/:profileID",
          element: <Account />,
          children: [
            {
              path: "favs",
              element: <Favourites></Favourites>
            },
            {
              path: "history",
              element: <HistoryGoods></HistoryGoods>
            },
            {
              path: "prefs",
              element: <Settings></Settings>
            }
          ]
          // element: <SellerPage></SellerPage>
        },
      ]
    },
    {
      path: "application",
      element: <ApplicationForm></ApplicationForm>
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
