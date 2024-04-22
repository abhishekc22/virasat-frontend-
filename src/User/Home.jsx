import React from "react";
import Navbar from "../Navbar";
import homepageImage from "../assets/images/homepage.jpg";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div
        className="hero h-80"
        style={{
          backgroundImage: `url(${homepageImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-black">Hello there</h1>
            <p className="mb-5 font-bold">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 h-96 rounded-lg border border-solid bg-white">
        <div className="bg-black border border-white p-4 rounded-md">
          <img
            src="src/assets/images/nettipattam 2.jpeg"
            alt="Nettepattam 1"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="bg-black border border-white p-4 rounded-md">
          <img
            src="src/assets/images/nettipaatam.jpg"
            alt="Nettepattam 2"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="bg-black border border-white p-4 rounded-lg">
          <img
            src="src/assets/images/nettipattam 2.jpeg"
            alt="Nettepattam 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <section className="bg-white dark:bg-gray-400">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-black sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black dark:text-black">
              We didn't reinvent the wheel
            </h2>
            <p className="mb-4 text-black">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p className=" text-gray-900">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-48">
            <img
              className="w-full rounded-lg"
              src="src/assets/images/nettipaatam.jpg"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="src/assets/images/nettipattam3.jpg"
            />
          </div>
        </div>
      </section>
      <div className="  bg-gray-500 flex flex-auto justify-center">
        <Footer />
      </div>
    </>
  );
}

export default Home;
