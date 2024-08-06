import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import AntdConfig from "./components/ant-config";
import Spinner from "./components/spinner";
import "antd/dist/reset.css";
import "./App.css";

const Layout = lazy(() => import("./components/layout"));
const BooksList = lazy(() => import("./components/books"));
const BookCreate = lazy(() => import("./components/books/create-update-books"));
function App() {
  return (
    <AntdConfig>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <Navigate to="/books" />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <Layout />
              </Suspense>
            }
          >
            <Route
              path="/books"
              element={
                <Suspense fallback={<Spinner />}>
                  <BooksList />
                </Suspense>
              }
            />
            <Route
              path="/books/add"
              element={
                <Suspense fallback={<Spinner />}>
                  <BookCreate />
                </Suspense>
              }
            />
            <Route
              path="/books/update/:updateId"
              element={
                <Suspense fallback={<Spinner />}>
                  <BookCreate />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Router>
    </AntdConfig>
  );
}

export default App;
