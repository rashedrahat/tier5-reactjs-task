import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import appRoutes from "./utils/routes";
import Facebook from "./pages/Facebook";
import Instagram from "./pages/Instagram";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={appRoutes.LANDING} element={<Landing />} />
        <Route path={appRoutes.FACEBOOK} element={<Facebook />} />
        <Route path={appRoutes.INSTAGRAM} element={<Instagram />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
