import {
  BrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import HomeScreen from "./screens/HomeScreen";
import ProdcutDetail from "./screens/ProdcutDetail";

function App() {
  const Layout = () => {
    return (
      <div>
        <div className="main">
          <>
            <Navbar />
          </>

          <div className="container">
            <div className="contentContainer">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomeScreen />,
        },
        {
          path: "/product/:id",
          element: <ProdcutDetail />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact="/" element={<HomeScreen />} />{" "}
        </Routes>
      </BrowserRouter> */}

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
