import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../src/App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Home from "./components/Home";
import CustomProvider from "./context/CustomProvider";
import Carrito from "./components/Carrito";
import UserListContainer from "./components/UserListContainer";
import UserDetailContainer from "./components/UserDetailContainer";
import Register from "./auth/Register";
import { AuthProvider } from "./auth/AuthContext";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./auth/Login";
import VerifyEmail from "./auth/VerifyEmail";
import Profile from "./auth/Profile";
import PrivateRoute from "./auth/PrivateRoute";
import { Checkout } from "./components/Checkout";
import Refercheckout from "./components/Refercheckout";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <CustomProvider>
      <div>
        <BrowserRouter>
          <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                exact
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/login"
                element={
                  !currentUser?.emailVerified ? (
                    <Login />
                  ) : (
                    <Navigate to="/profile" replace />
                  )
                }
              />
              <Route
                path="/register"
                element={
                  !currentUser?.emailVerified ? (
                    <Register />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
              <Route
                path="/main"
                element={<ItemListContainer greeting="Productos:" />}
              />
              <Route path="/verify-email" element={<VerifyEmail />} />
              <Route
                path="/main/:categoria"
                element={<ItemListContainer greeting="Categoria:" />}
              />
              <Route path="/maindetail" element={<ItemDetailContainer />} />
              <Route
                path="/maindetail/:item"
                element={<ItemDetailContainer />}
              />
              <Route
                exact
                path="/carrito"
                element={
                  <PrivateRoute>
                    <Carrito />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/checkout"
                element={
                  <PrivateRoute>
                    <Checkout />
                  </PrivateRoute>
                }
              />
              <Route path="/userDet" element={<UserListContainer />} />
              <Route path="/userDet/:user" element={<UserDetailContainer />} />
              <Route path="/refcheckout" element={<Refercheckout />} />
              <Route
                path="*"
                element={<p>Error 404 Archivo no encontrado...</p>}
              />
            </Routes>
            <Footer />
          </AuthProvider>
        </BrowserRouter>
      </div>
    </CustomProvider>
  );
}
