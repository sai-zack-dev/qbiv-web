import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Landing from "./pages/Landing";
import ErrorPage from "./components/ErrorPage"; // 👈 Create this component
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Landing />
      </MainLayout>
    ),
    errorElement: <ErrorPage />, 
  },
]);

function App() {
  useEffect(() => {
    const initialLoader = document.getElementById("initial-loader");
    if (initialLoader) {
      setTimeout(() => {
        initialLoader.remove();
      }, 500);
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
