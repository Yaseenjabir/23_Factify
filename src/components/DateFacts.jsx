import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import theImages from "../imagesData/ImagesData";
const DateFacts = ({
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
  noInput,
  DataLoading,
  // images states
  images,
  setImages,
}) => {
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date(1659312000000));
  const [date, setDate] = useState("");
  const randomIndex = Math.floor(Math.random() * theImages.length);
  const generateImage = () => {
    dispatch(setImages(theImages[randomIndex]));
  };

  useEffect(() => {
    {
      !output && generateImage();
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let month = startDate.getMonth() + 1;
    let year = startDate.getFullYear();
    let shortYear = year.toString().slice(-2);
    const date = `${month}/${shortYear}`;
    setDate(date);
  }, [startDate]);

  const fetchData = async () => {
    if (date) {
      const URL = `http://numbersapi.com/${date}/date`;
      console.log(URL);
      try {
        dispatch(DataLoading());
        const res = await fetch(URL);
        if (!res.ok) {
          dispatch(noResponse("Something went wrong!!"));
        } else {
          const data = await res.text();
          dispatch(setData(data));
          dispatch(setImages(theImages[randomIndex]));
          dispatch(setError());
        }
      } catch (error) {
        dispatch(empty());
        dispatch(errorMsg(error.message));
      }
    } else {
      dispatch(noInput());
    }
  };

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

  return (
    <div className="w-full min-h-[100vh] bg-blue-600 flex justify-center items-center px-3 py-10">
      <Toaster />
      {loading ? (
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <section className="max-w-[500px] py-4 px-2 bg-white min-h-[250px] rounded-lg flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold my-3">Fact About a Date</h1>
          <div className="mb-4">
            <img src={images} className="rounded-md" />
          </div>
          <div className="flex gap-3">
            <p className="flex">
              <label htmlFor="number" className="text-lg">
                Enter number:
              </label>
            </p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MM/yyyy"
              excludeDates={[]}
              showMonthYearPicker
              className="border outline-none w-[130px]"
            />
          </div>
          <p className="my-3 text-xl">
            {error ? error : output ? output : "Please Enter Only Digits"}
          </p>
          <hr className="border-black w-[90%] mb-4 mt-2" />
          <div className="flex justify-between w-full px-[18px]">
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
            <div>
              <button
                onClick={fetchData}
                className="bg-blue-500 py-1 px-3 text-white font-medium text-lg rounded-lg border-[1] border-blue-500 cursor-pointer transition-all ease-in-out duration-200 "
              >
                Search Fact
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
export default DateFacts;
