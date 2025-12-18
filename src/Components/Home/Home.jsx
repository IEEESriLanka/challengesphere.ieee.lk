

export const Home = () => {
  return (
    <section id="home">
      <div className="w-full h-screen relative">
        <img src="assets/home/bg.svg" className="h-full w-full object-cover" alt="Background" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-background-black bg-opacity-70">
          <img src="assets/logos/ieeesls.svg" alt="" className="w-[40%] lg:w-[13%]" />
          <div className="flex flex-col lg:text-[80px] text-7xl font-bold text-white text-center">
            IEEE Challenge Sphere
          </div>
          <p className="text-white mt-5 text-xl">
            Empowering innovators through design, coding, and real-world problem
            solving.
          </p>
        </div>
      </div>
    </section>
  );
};
