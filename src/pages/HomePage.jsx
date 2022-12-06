import React from "react";
import Navbar from "../components/navbar/Navbar";
import SliderComponet from "../components/navbar/sliderComponet";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="container mainContainer">
        <main className="Home-cotainer">
          <div className="Home-container-header">
            <h1 className="text-center">
              Photography is poetry & beautiful untold stories
            </h1>
            <p className="text-center header-p mt-4">
              Flip through more than 10,000 vintage shots, old photograghs,
              historic images and captures seamlessly in one place. Register to
              get top access.
            </p>
          </div>
          {/* <div className="sliderContainer p-2">
            <SliderComponet />
          </div> */}
        </main>
      </div>
      <SliderComponet />
    </div>
  );
}

export default HomePage;
