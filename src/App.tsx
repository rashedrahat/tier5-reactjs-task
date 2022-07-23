import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import appRoutes from "./utils/routes";
import FacebookHome from "./pages/Facebook/Home/Index";
import FacebookFriends from "./pages/Facebook/Friends/Index";
import InstagramHome from "./pages/Instagram/Home/Index";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import "./assets/facebook.css";
import "./assets/instagram.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={appRoutes.LANDING} element={<Landing />} />
        <Route path={appRoutes.FACEBOOK_HOME} element={<FacebookHome />} />
        <Route
          path={appRoutes.FACEBOOK_FRIENDS}
          element={<FacebookFriends />}
        />
        <Route path={appRoutes.INSTAGRAM_HOME} element={<InstagramHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
