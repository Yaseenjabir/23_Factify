import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 1);
  };

  return (
    <>
      <footer className="bg-[#212529] text-white">
        <ul className="flex justify-evenly flex-wrap py-4 px-10 border-b-[1px] max-w-[490px] mx-auto">
          <Link
            to={"/"}
            className="text-lg hover:text-blue-500 cursor-pointer duration-200 ease-in-out transition-all"
            onClick={scrollToTop}
          >
            Home
          </Link>
          <Link
            to={"/MathFacts"}
            className="text-lg hover:text-blue-500 cursor-pointer duration-200 ease-in-out transition-all"
            onClick={scrollToTop}
          >
            Math
          </Link>
          <Link
            to={"/TriviaFacts"}
            className="text-lg hover:text-blue-500 cursor-pointer duration-200 ease-in-out transition-all"
            onClick={scrollToTop}
          >
            Trivia
          </Link>
          <Link
            to={"/DateFacts"}
            className="text-lg hover:text-blue-500 cursor-pointer duration-200 ease-in-out transition-all"
            onClick={scrollToTop}
          >
            Date
          </Link>
          <Link
            to={"/RandomFacts"}
            className="text-lg hover:text-blue-500 cursor-pointer duration-200 ease-in-out transition-all"
            onClick={scrollToTop}
          >
            Random
          </Link>
        </ul>
        <div className="py-4 text-center max-w-[490px] mx-auto">
          <p>2024 @Copyright All Right Reserved by Ezgod</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
