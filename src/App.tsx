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

import { useLazyGetLoggedUserQuery } from './features/apiSlice'
// import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { useAppDispatch } from './hooks'
import AccountAddGood from './AccountAddGood'
import ProtectedRoute from './ProtectedRoute'
import CreateOrder from "./CreateOrder";
import AccountEdit from './AccountEdit'
import CreateOrderSuccess from './CreateOrderSuccess'
import Category from './Category'
import AccountEditGood from './AccountEditGood'

function App() {
  //dispatch
  const dispatch = useAppDispatch();

  //local storage
  const loggedIn = localStorage.getItem("loggedIn");
  // console.log(loggedIn);
  const loggedInData: {
    loggedIn: boolean
  } = loggedIn !== null && JSON.parse(loggedIn);

  // getUser
  const [getUser] = useLazyGetLoggedUserQuery();
  // console.log(loggedInData);
  // const {data: user = {} as UserInterface} = useGetLoggedUserQuery(!loggedInData.loggedIn && skipToken);
  // console.log(user);
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
          path: "category/:categoryName",
          element: <Category></Category>
        },
        {
          path: "application",
          element: <ApplicationForm></ApplicationForm>
        },
        {
          path: "/homestaging",
          element: <HomeStaging></HomeStaging>,
        },
        {
          path: "createOrder",
          element: <CreateOrder />,
          // children:[],
          // element: <CreateOrder></CreateOrder>
        },
        {
          path: "successOrderCreate",
          element: <CreateOrderSuccess />
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
              children: [            
                {
                  path: "mygoods",
                  element: <AccountGoods></AccountGoods>,
                },
                {
                  path: "addGood",
                  element: <AccountAddGood></AccountAddGood>
                },
                {
                  path: "goods/:goodID/edit",
                  element: <AccountEditGood />
                },
                {
                  path: "history",
                  element: <HistoryGoods></HistoryGoods>
                },
                {
                  path: "edit",
                  element: <AccountEdit></AccountEdit>
                }
              ],
            },

          ]
          // element: <SellerPage></SellerPage>
        },
      ]
    },


    {
      path: "showApplication/:applicationID",
      element: <ShowApplication />
    },

  ]);

  useEffect(() => {
    if(loggedInData.loggedIn) {
      getUser(loggedInData.loggedIn)
      .then((data) => {
        const user = data.data;
        user && dispatch(login({...user, loggedIn: true}));
      })
    }
    // loggedInData.loggedIn && getUser(loggedInData.loggedIn)
    // .then((data) => {
    //   const user = data.data;
    //   user && dispatch(login({...user, loggedIn: true}));

    // })
  }, [])

  // useEffect(() => {
  //   if(user._id) {
  //     dispatch(login({...user, loggedIn: true}))
  //   }
  // } ,[user._id])

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
