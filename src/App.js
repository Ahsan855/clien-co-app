import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import publicRoute from "./routes/publicRoutes";


function App() {
  return (
    <Navbar>
      <Routes>
        {publicRoute.map(({path, Component} , index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </Navbar>
  );
}

export default App;
