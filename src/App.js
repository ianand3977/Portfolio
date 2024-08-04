// App.js
import React, { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import MoveToTop from "./Components/MoveToTop";
import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [Loading, SetLoading] = useState(true);

  useEffect(() => {
    SetLoading(true);

    setTimeout(() => {
      SetLoading(false);
    }, 1900);
  }, []);

  return (
    <>
      {Loading ? (
        <div className="loader">
          <HashLoader
            color={'#9067C6'}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Lottie className="bg" animationData={nightsky} loop={true} />
          <Lottie className="bgtwo" animationData={nightsky} loop={true} />
          <Lottie className="bgtemp" animationData={nightsky} loop={true} />

          <Nav />
          <MoveToTop />

          <div id="home"><Home /></div>
          <div id="about"><About /></div>
          <div id="projects"><Projects /></div>
          <div id="resume"><Resume /></div>
          
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
