import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
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
import ShowApplication from './ShowApplication'
import HomeStaging from './HomeStaging'
import AccountGoods from './AccountGoods'

import { useGetLoggedUserQuery } from './features/apiSlice'
// import { useDispatch } from 'react-redux'
import { login, UserInterface } from './features/userSlice'
import { useAppDispatch } from './hooks'

function App() {
  //dispatch
  const dispatch = useAppDispatch();

  //getUser
  const {data: user = {} as UserInterface} = useGetLoggedUserQuery();

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
            // {
            //   path: "historyBuy",
            //   element: <AccountHistoryBuy></AccountHistoryBuy>
            // },
            // {
            //   path: "historySell",
            //   element: <AccountHistorySell></AccountHistorySell>
            // },
            {
              path: "history",
              element: <HistoryGoods></HistoryGoods>
            },
            {
              path: "prefs",
              element: <Settings></Settings>
            },
            {
              path: "mygoods",
              element: <AccountGoods></AccountGoods>,
            },

          ]
          // element: <SellerPage></SellerPage>
        },
      ]
    },
    {
      path: "application",
      element: <ApplicationForm></ApplicationForm>
    },
    {
      path: "showApplication/:applicationID",
      element: <ShowApplication />
    },
    {
      path: "/homestaging",
      element: <HomeStaging></HomeStaging>,
    },
  ], {
    basename:"/mohen-tohen"
  });

  useEffect(() => {
    if(user._id) {
      dispatch(login({...user, loggedIn: true}))
    }
  } ,[user])

  return (
    <>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </>

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
