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
// import Settings from './Settings'
import ApplicationForm from './AppliactionForm'
import ShowApplication from './ShowApplication'
import HomeStaging from './HomeStaging'
import AccountGoods from './AccountGoods'

import { useGetLoggedUserQuery } from './features/apiSlice'
// import { useDispatch } from 'react-redux'
import { login, UserInterface } from './features/userSlice'
import { useAppDispatch } from './hooks'
import AccountAddGood from './AccountAddGood'
import ProtectedRoute from './ProtectedRoute'
import CreateOrder from "./CreateOrder";

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
        {
          path: "createOrder",
          element: <CreateOrder />
          // element: <CreateOrder></CreateOrder>
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

            // {
            //   path: "prefs",
            //   element: <Settings></Settings>
            // },
            {
              element: <ProtectedRoute></ProtectedRoute>,
              children: [            {
                path: "mygoods",
                element: <AccountGoods></AccountGoods>,
              },
              {
                path: "addGood",
                element: <AccountAddGood></AccountAddGood>
              },
              {
                path: "history",
                element: <HistoryGoods></HistoryGoods>
              }]
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
  ]);

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
