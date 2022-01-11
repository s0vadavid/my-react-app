import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

let dialogs = [
  { id: "1", name: "Dimych" },
  { id: "2", name: "Andrew" },
  { id: "3", name: "Sveta" },
  { id: "4", name: "Sasha" },
  { id: "5", name: "Viktor" },
  { id: "6", name: "Valera" },
];

let messages = [
  { id: "1", message: "Hi" },
  { id: "2", message: "How are you?" },
  { id: "3", message: "Yo" },
  { id: "4", message: "Yo" },
  { id: "5", message: "Yo" },
];

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={<Dialogs dialogs={dialogs} messages={messages} />}
            />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
