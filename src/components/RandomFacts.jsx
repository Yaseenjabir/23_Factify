import toast, { Toaster } from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import theImages from "../imagesData/ImagesData";

const RandomFacts = ({
  dispatch,
  // error states
  error,
  setError,
  errorMsg,
  // output states
  output,
  setData,
  noResponse,
  empty,
  DataLoading,
  // images states
  images,
  setImages,
  // randomfacts states
  randomFacts,
  setFactsState,
}) => {
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(0);
  const randomIndex = Math.floor(Math.random() * theImages.length);
  const generateImage = () => {
    dispatch(setImages(theImages[randomIndex]));
  };

  const fetchData = async () => {
    try {
      dispatch(DataLoading());
      const res = await fetch(randomFacts);
      if (!res.ok) {
        dispatch(noResponse("Something went wrong!!"));
      } else {
        const data = await res.text();
        dispatch(setData(data));
        dispatch(setError());
      }
      dispatch(setImages(theImages[randomIndex]));
    } catch (error) {
      dispatch(empty());
      dispatch(errorMsg(error.message));
    }
  };

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      {
        !output && generateImage();
      }
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } else {
      fetchData();
    }
  }, [randomFacts, click]);

  const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(output);
    {
      output && window.speechSynthesis.speak(utterance);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    toast("Text Copied To Clipboard");
  };

  const handleType = (type) => {
    dispatch(setFactsState(type));
    setClick((prev) => prev + 1);
  };

  return (
    <div className="w-full min-h-[100vh] bg-blue-600 flex justify-center items-center px-3 py-5">
      <Toaster />
      {loading ? (
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <section className="max-w-[500px] py-4 px-2 bg-white min-h-[250px] rounded-lg flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold my-3">
            Random Facts About{" "}
            <span className="text-blue-700">Trivia, Date, Math</span>
          </h1>
          <div className="mb-4">
            <img src={images} className="rounded-md" />
          </div>
          <textarea
            className="border outline-none px-1"
            cols="30"
            rows="5"
            value={error ? error : output ? output : "Loading..."}
            readOnly
          ></textarea>
          <hr className="border-black w-[90%] mb-4 mt-2" />
          <div className="flex justify-center w-full px-[18px]">
            <div className="flex gap-2">
              <FaVolumeHigh
                onClick={speakText}
                className="border-1 border-blue-600 rounded-full text-4xl p-2 text-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-200"
              />
              <FaRegCopy
                onClick={handleCopy}
                className="border-1 rounded-full text-4xl p-2 text-blue-600 border-blue-600 cursor-pointer hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-200"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleType("trivia")}
            >
              Trivia
            </button>
            <button
              onClick={() => handleType("date")}
              type="button"
              className="btn btn-success"
            >
              Date
            </button>
            <button
              onClick={() => handleType("math")}
              type="button"
              className="btn btn-danger"
            >
              Math
            </button>
            <button
              onClick={() => handleType("year")}
              type="button"
              className="btn btn-warning"
            >
              Year
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default RandomFacts;
