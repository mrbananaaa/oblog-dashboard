import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import LoadingPage from "./pages/LoadingPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const MyPostsPage = lazy(() => import("./pages/MyPostsPage"));
const NotificationsPage = lazy(() => import("./pages/NotificationsPage"));
const FavoritesPostsPage = lazy(() => import("./pages/FavoritesPostsPage"));
const CreateNewPostPage = lazy(() => import("./pages/CreateNewPostPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

const App = () => {
  return (
    <Routes>
      {/* protected routes */}
      <Route element={<ProtectedRoutes />}>
        <Route element={<Main />}>
          <Route
            path="/"
            index
            element={
              <Suspense fallback={<LoadingPage />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/my-post"
            index
            element={
              <Suspense fallback={<LoadingPage />}>
                <MyPostsPage />
              </Suspense>
            }
          />
          <Route
            path="/notifications"
            index
            element={
              <Suspense fallback={<LoadingPage />}>
                <NotificationsPage />
              </Suspense>
            }
          />
          <Route
            path="/favorites-posts"
            index
            element={
              <Suspense fallback={<LoadingPage />}>
                <FavoritesPostsPage />
              </Suspense>
            }
          />
          <Route
            path="/create-new-post"
            index
            element={
              <Suspense fallback={<LoadingPage />}>
                <CreateNewPostPage />
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route
        path="/login"
        index
        element={
          <Suspense fallback={<LoadingPage />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route path="/loading" element={<LoadingPage />} />
    </Routes>
  );
};

export default App;
