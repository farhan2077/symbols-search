import React, { useState, useEffect } from "react";

export default function Footer() {
  const [shareableLinkCopied, setShareableLinkCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShareableLinkCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [shareableLinkCopied]);

  return (
    <footer className="flex flex-col items-center justify-between gap-4 my-10 sm:flex-row">
      <div>
        <span className="text-gray-500 dark:text-gray-400">Made by</span>{" "}
        <a
          href="https://twitter.com/farhanbinamin"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gray-900 hover:text-gray-500 dark:text-white dark:hover:text-gray-400"
        >
          @farhanbinamin
        </a>
      </div>
      {shareableLinkCopied ? (
        <p className="px-3 py-1.5 text-teal-600 dark:text-teal-500">
          Link copied to clipboard!
        </p>
      ) : (
        <div
          className="flex items-center px-3 py-1.5 text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => {
            setShareableLinkCopied(true);
            navigator.clipboard.writeText("https://symbol-search.vercel.app");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-1.5 fill-current"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
          <p>share</p>
        </div>
      )}
    </footer>
  );
}
