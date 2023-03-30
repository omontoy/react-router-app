import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

// SECOND WAY
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// SECOND WAY
// const myRoutes = createBrowserRouter(routeDefinitions);

// FIRST WAY
const myRoutes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
]);

function App() {
  return <RouterProvider router={myRoutes} />;
}

export default App;
