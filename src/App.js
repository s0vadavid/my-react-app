import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs/*"
            element={<DialogsContainer />}
          />
          <Route
            path="/profile/:userId?"
            element={
              <ProfileContainer />
            }
          />
          <Route
            path="/users/*"
            element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
