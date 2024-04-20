import { Link } from "react-router-dom";
import myImage from "../assets/heroSection.jpeg";
import { useDispatch } from "react-redux";
import { colorSLice } from "../Redux/store";
import { useState } from "react";
const Home = () => {
  const dispatch = useDispatch();
  const [homepageLoading, setHomepageLoading] = useState(true);
  setTimeout(() => {
    setHomepageLoading(false);
  }, 500);
  const handleType = (type) => {
    dispatch(colorSLice.changeColor(type));
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 1);
  };
  return (
    <div className="w-full bg-[#212529] px-2 py-10 flex flex-col min-h-[100vh] justify-center items-center">
      {homepageLoading ? (
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <div className="gap-5 flex flex-col lg:flex-col-reverse mb-4">
            <div className="flex items-center justify-center ">
              <div className="w-full max-w-[470px]">
                <img className="w-full rounded-md" src={myImage} />
              </div>
            </div>
            <div className="text-center text-white">
              <h1 className="font-bold text-3xl">
                <span className="text-blue-500">Factify:</span> Unleashing the
                World of Numerical Trivia
              </h1>
              <p className="lead my-4 max-w-[790px] mx-auto">
                Dive into the fascinating world of numbers with Factify! Our API
                provides intriguing facts about numbers, dates, years, and more.
                Whether you’re a math enthusiast, a trivia buff, or just
                curious, Factify offers a unique way to learn and have fun.
                Discover historical events linked to a specific date, uncover
                mathematical facts about a number, or simply enjoy a random
                fact. With Factify, every number tells a story!
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 lg:flex-row w-full">
            <Link
              to={"/MathFacts"}
              type="button"
              onClick={() => handleType("Features")}
              className={`btn btn-primary btn-lg px-4 me-md-2 w-full max-w-[460px]`}
            >
              Math Facts
            </Link>
            <Link
              to={"/TriviaFacts"}
              type="button"
              className="btn btn-outline-secondary btn-lg px-4 w-full max-w-[460px]"
              onClick={() => handleType("Pricing")}
            >
              Trivia Facts
            </Link>
            <Link
              to={"/DateFacts"}
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2 w-full max-w-[460px]"
              onClick={() => handleType("FAQs")}
            >
              Date Facts
            </Link>
            <Link
              to={"/RandomFacts"}
              type="button"
              className="btn btn-outline-secondary btn-lg px-4 w-full max-w-[460px]"
              onClick={() => handleType("About")}
            >
              Random
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
