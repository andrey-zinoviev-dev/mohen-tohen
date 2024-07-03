import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Home from './Home'
import GoodPage from './GoodPage'
import HomeContent from './HomeContent'

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
