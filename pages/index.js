import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { debounce } from "../utils/debounce";
import { SYMBOLS } from "../data/data";

function CopySuccessfulToast() {
  return (
    <div className="fixed bottom-0 left-0 z-10 px-4 py-2 m-4 text-white bg-teal-500 border-2 border-teal-700 border-solid rounded-lg dark:bg-teal-200 dark:text-gray-900 dark:border-teal-500">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <p className="ml-2 text-md">Symbol copied!</p>
      </div>
    </div>
  );
}

function BackToTop() {
  return (
    <Link href="/">
      <a className="fixed bottom-0 right-0 z-10 p-3 m-4 text-white bg-teal-500 border-2 border-teal-700 border-solid rounded-full dark:border-teal-500 dark:bg-teal-200 dark:text-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </Link>
  );
}

export default function Home({ symbols }) {
  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleSLashKeyPress = (event) => {
    if (event.keyCode === 191) {
      textInput.current.focus();
      event.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleSLashKeyPress, false);

    return () => {
      document.removeEventListener("keydown", handleSLashKeyPress, false);
    };
  }, []);

  const handleEscapeKeyPress = (event) => {
    if (event.keyCode === 27) {
      textInput.current.blur();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKeyPress, false);

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress, false);
    };
  }, []);

  const [searchValue, setSearchValue] = useState("");

  function handleSearch(e) {
    setSearchValue(e.target.value);
  }

  const filteredResult = symbols.filter((symbol) => {
    return symbol.alias.toLowerCase().includes(searchValue.toLowerCase());
  });

  const [showToast, setShowToast] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = debounce(() => {
    window.scrollY > 100 ? setShowBackToTop(true) : setShowBackToTop(false);
  }, 50);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () =>
      window.removeEventListener("scroll, touchmove", handleScroll, false);
  }, [handleScroll]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showToast]);

  return (
    <>
      {showBackToTop ? <BackToTop /> : <></>}
      {showToast ? <CopySuccessfulToast /> : <></>}

      {/* hero */}
      <section className="my-10">
        <p className="text-4xl font-semibold tracking-tight text-gray-800 uppercase dark:text-white">
          Symbols search
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-300">
          Find symbols from &quot;Microsoft Word equation&quot; easily.
        </p>
      </section>

      {/* input */}
      <section className="sticky top-0 z-10 bg-white rounded-b-lg group dark:bg-gray-900">
        <div className="px-4 py-3 mb-8 border-2 border-teal-200 border-solid rounded-lg bg-gray-50 dark:bg-gray-700 focus-within:border-teal-400 dark:focus-within:border-teal-500 border-transition">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              ref={textInput}
              type="text"
              onChange={(e) => handleSearch(e)}
              className="w-full ml-2 text-sm text-gray-600 placeholder-gray-400 outline-none appearance-none md:text-base dark:text-white focus:placeholder-gray-300 dark:placeholder-gray-400 dark:focus:placeholder-gray-500 bg-gray-50 dark:bg-gray-700 focus:outline-none"
              placeholder="Search 338 symbols"
            />
            <div className="select-none text-gray-600 dark:text-white bg-white dark:bg-gray-900 border border-solid border-gray-200 dark:border-gray-600 rounded-md shadow-md dark:shadow-md-gray px-2.5 py-1">
              /
            </div>
          </div>
        </div>
      </section>

      {/* grid */}
      <section className="z-0 grid grid-flow-row grid-cols-2 gap-8 text-gray-700 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 hover:text-gray-900">
        {filteredResult.map((symbol) => (
          <div
            onClick={() => {
              setShowToast(true);
              navigator.clipboard.writeText(symbol.symbol);
            }}
            key={symbol.id}
            className="border-2 border-teal-200 border-solid rounded-lg cursor-pointer dark:hover:border-teal-500 bg-gray-50 dark:bg-gray-700 aspect-h-4 aspect-w-4 hover:border-teal-400 border-transition"
          >
            <div className="flex">
              <div className="m-auto text-4xl text-gray-600 font-display dark:text-white">
                {symbol.symbol}
              </div>
              <div className="absolute inset-x-0 bottom-0 px-1 pb-1 text-sm text-center text-gray-500 lowercase dark:text-gray-300">
                {symbol.name}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      symbols: SYMBOLS,
    },
  };
}
