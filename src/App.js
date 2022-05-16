import { Route, Routes } from "react-router-dom";
import AdminRoute from "./Authentication/AdminRoute";
import PrivateRoute from "./Authentication/PrivateRoute";
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import publicRoute from "./routes/publicRoutes";

function App() {
  return (
    <Navbar>
      <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route element={<PrivateRoute />}>
        {PrivateRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        </Route>
        <Route element={<AdminRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
