import { useState, useEffect } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchFound from "./pages/SearchFound";
import Posts from "./pages/Posts";
import MemberMyInfo from "./pages/MemberMyInfo";
import WritePage from "./pages/WritePage";
import axios from "axios";
import "/src/tailwind.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MemberMyInfo" element={<MemberMyInfo />} />
        <Route path="/SearchFound" element={<SearchFound />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/WritePage" element={<WritePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
