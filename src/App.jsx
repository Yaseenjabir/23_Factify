import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MathFacts from "./components/MathFacts";
import TriviaFacts from "./components/TriviaFacts";
import DateFacts from "./components/DateFacts";
import RandomFacts from "./components/RandomFacts";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { appLoadingSlice } from "./Redux/store";
import {
  defaultValue,
  errorMsg,
  setData,
  noResponse,
  empty,
  noInput,
  DataLoading,
  setImages,
  setFactsState,
} from "./Redux/store";

function App() {
  const color = useSelector((store) => store.colorSlice);
  const appLoading = useSelector((store) => store.appLoadingSlice);
  const error = useSelector((store) => store.errorSlice);
  const output = useSelector((store) => store.outputSlice);
  const images = useSelector((store) => store.imagesSlice);
  const randomFacts = useSelector((store) => store.randomFactsSlice);
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(appLoadingSlice.changeState());
  }, 3000);
  useEffect(() => {
    localStorage.setItem("activePage", color);
  }, [color]);

  return (
    <>
      {appLoading ? (
        <div
          className="spinner-border fixed top-[45%] left-[45%] md:left-[46%] lg:left-[48%] xl:[50%]"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <BrowserRouter>
          <Navbar color={color} />
          <div className="flex flex-col lg:flex-row">
            <Sidebar color={color} />
            <Routes>
              <Route path="/" element={<Home color={color} />} />
              <Route
                path="/MathFacts"
                element={
                  <MathFacts
                    dispatch={dispatch}
                    // Error states
                    error={error}
                    setError={defaultValue}
                    errorMsg={errorMsg}
                    // output state
                    output={output}
                    setData={setData}
                    noResponse={noResponse}
                    empty={empty}
                    noInput={noInput}
                    DataLoading={DataLoading}
                    // images states
                    setImages={setImages}
                    images={images}
                  />
                }
              />
              <Route
                path="/TriviaFacts"
                element={
                  <TriviaFacts
                    dispatch={dispatch}
                    // Error states
                    error={error}
                    setError={defaultValue}
                    errorMsg={errorMsg}
                    // output state
                    output={output}
                    setData={setData}
                    noResponse={noResponse}
                    empty={empty}
                    noInput={noInput}
                    DataLoading={DataLoading}
                    // images states
                    setImages={setImages}
                    images={images}
                  />
                }
              />
              <Route
                path="/DateFacts"
                element={
                  <DateFacts
                    dispatch={dispatch}
                    // Error states
                    error={error}
                    setError={defaultValue}
                    errorMsg={errorMsg}
                    // output state
                    output={output}
                    setData={setData}
                    noResponse={noResponse}
                    empty={empty}
                    DataLoading={DataLoading}
                    // images states
                    setImages={setImages}
                    images={images}
                  />
                }
              />
              <Route
                path="/RandomFacts"
                element={
                  <RandomFacts
                    dispatch={dispatch}
                    // Error states
                    error={error}
                    setError={defaultValue}
                    errorMsg={errorMsg}
                    // output state
                    output={output}
                    setData={setData}
                    noResponse={noResponse}
                    empty={empty}
                    noInput={noInput}
                    DataLoading={DataLoading}
                    // images states
                    setImages={setImages}
                    images={images}
                    // randomfacts states
                    randomFacts={randomFacts}
                    setFactsState={setFactsState}
                  />
                }
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
