import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./views/Signup";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Dashboard } from "./views/Private";
import { NavBar } from "./components/Navbar";
import injectContext from "./store/context";
import { PrivateRoute } from "./PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default injectContext(App);
