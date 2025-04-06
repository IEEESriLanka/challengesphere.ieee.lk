import React from "react";
import BG from "../../assets/home/bg.svg";
import IEEELogo from "../../assets/logos/ieeesls.svg";

const Home = () => {
  return (
    <section id="home">
      <div className="w-full h-screen relative">
        <img src={BG} className="h-full w-full object-cover" alt="Background" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-background-black bg-opacity-70">
          <div className="flex flex-col lg:text-[110px] text-7xl font-bold text-white text-center">
            <p>IEEE</p>
            <p>Challenge Sphere</p>
            <p className="pt-2">2025</p>
          </div>
          <img src={IEEELogo} alt="" className="mt-8 w-[40%] lg:w-[13%]" />
        </div>
      </div>
    </section>
  );
};

export default Home;
