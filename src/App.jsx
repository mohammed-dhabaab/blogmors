import styles from "./styles";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import Post from "./pages/Post/Post";
import Author from "./pages/Author/Author";
import Authors from "./pages/Authors/Authors";
import Footer from "./components/Footer";
import Posts from "./pages/Posts/Posts";

const Root = () => {
  return (
    <div className={`flex h-[100vh] flex-col justify-between`}>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "posts/:postId",
        element: <Post />,
      },
      {
        path: "Authors",
        element: <Authors />,
      },
      {
        path: "Authors/:authorId",
        element: <Author />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
