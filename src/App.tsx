import "./app.css";
import Modulos from "@/components/modulos";
import { Routes, Route, Navigate } from "react-router-dom";
import Container from "./components/container";
import Navleaf from "./components/navleft";
import Header from "./components/header";
import Layout from "./components/layout";
import Desafios from "./components/desafios";

export default function App() {
  return (
    <div className="min-h-scr  een bg-blue-50">
      <Routes>
        <Route path="/" element={<Navigate to="/modulos" replace />} />
        <Route path="/" element={<Layout />}>
          <Route path="/modulos" element={<Modulos />}></Route>
          <Route path="/container" element={<Container />} />
          <Route path="/desafios" element={<Desafios />} />
        </Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/navleft" element={<Navleaf />}></Route>
      </Routes>
    </div>
  );
}
