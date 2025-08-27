import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Header />
      <Header />

      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Card title="React ek Javascript Libary hai jo UI Banane ke Liye Use hoti hai" />
        <Card title="JSX ek Sytanx hai jo HTML + JS Ko Ek sath Likhne deta hai" />
        <Card title="Component" desc="ek reusable chhota hai piece of UI hota hai" />
      </div>

      <Footer />
      <Footer />

    </div>


  )
}

export default App