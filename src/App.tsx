import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Landing from "./pages/Landing";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Landing />
      </MainLayout>
    ),
  },
]);

function App() {
  useEffect(() => {
    // Remove the initial HTML loader when React is ready
    const initialLoader = document.getElementById('initial-loader');
    if (initialLoader) {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        initialLoader.remove();
      }, 500);
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;