import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Home from './Home'
import GoodPage from './GoodPage'
import { GoodInterface } from './interfaces'
import HomeContent from './HomeContent'

function App() {

  //states
  const [basket, setBasket] = useState<GoodInterface[]>([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home basket={basket}></Home>,
      children: [
        {
          path: "/",
          element: <HomeContent setBasket={setBasket}></HomeContent>
        },
        {
          path: "/goods/:goodID",
          element: <GoodPage />
        }
      ]
    },

  ]);

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
