// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
const App = () => {
  // return (
  //   <div className="App">
  //     {/* <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div> */}
  //     <h1>Vite + React</h1>
  //     <div>Join the Mailing List below!</div>
  //     <input type="text" placeholder="Enter your email" />
  //     <button onClick={() => {}}>Submit</button>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //     </div>
  //   </div>
  // );

  return (
    <BrowserRouter>
      <Header />

      <main className="flex-shrink-0">
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
