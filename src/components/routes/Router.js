import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Resilience from "../../pages/Resilience";
import Projets from "../../pages/Projets";
import Actualite from "../../pages/Actualite";
import Contact from "../../pages/Contact";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/resilience" exact element={<Resilience />}></Route>
        <Route path="/projets" exact element={<Projets />}></Route>
        <Route path="/actualite" exact element={<Actualite />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
        <Route path="/*" exact element={<Navigate to="/" replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
