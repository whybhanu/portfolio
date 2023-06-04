import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Feature from "./components/features/Feature";

function App() {
  return (
    <div className="w-100 h-auto bg-bodyColor text-lightText font-titleFont">
      <div className="max-w-screen-2x1 mx-auto px-16 ">
        <Navbar/>
        <Banner/>
        <Feature/>
      </div>
    </div>
  );
}

export default App;
