import React from "react";
import Link from "next/link";

import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between mt-5">
      {/* logo */}
      <Link href="/">
        <a>
          <svg
            className="w-10 h-10 border-2 border-teal-200 border-solid rounded-lg dark:border-teal-300 dark:bg-white"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <rect width="512" height="512" rx="90" fill="#fff" />
              <path
                d="M279.43 80.447c-12.858 10.905-19.287 24.17-19.287 39.795 0 15.462 4.231 31.006 12.695 46.631 8.626 15.462 18.636 28.646 30.029 39.551 11.393 10.905 20.182 19.612 26.367 26.123 6.348 6.348 13.428 14.079 21.241 23.193 7.975 8.952 14.241 17.009 18.798 24.17 11.231 17.416 16.846 32.715 16.846 45.899 0 13.02-2.767 25.146-8.301 36.377-5.371 11.23-13.102 21.484-23.193 30.761-9.928 9.115-22.705 16.683-38.33 22.705-15.462 6.022-32.552 9.44-51.27 10.254 5.209-7.487 7.813-15.299 7.813-23.437 0-8.301-1.709-16.683-5.127-25.147-3.418-8.626-8.626-17.822-15.625-27.588-11.231-15.787-23.844-31.25-37.842-46.386-13.834-15.137-23.519-25.961-29.053-32.471-5.371-6.51-11.474-14.73-18.31-24.658-13.346-19.206-20.02-38.493-20.02-57.862 0-19.368 5.941-37.353 17.823-53.955 11.881-16.601 27.913-29.703 48.095-39.306 20.345-9.603 42.562-14.486 66.651-14.649zm81.299 147.461c0-15.788-2.849-32.064-8.545-48.828-11.231-32.715-29.948-59.082-56.153-79.102.326-2.93 3.093-6.428 8.301-10.497 5.208-4.07 9.522-6.104 12.939-6.104 11.882 0 25.717 2.36 41.504 7.08 15.951 4.72 28.565 9.277 37.842 13.672.814 4.883 1.221 13.428 1.221 25.635 0 12.044-1.139 27.181-3.418 45.41-2.279 18.066-5.046 32.389-8.301 42.969-.976 2.441-4.476 4.72-10.498 6.836-5.859 1.953-10.823 2.929-14.892 2.929zM243.785 404.666c-1.953 11.068-4.964 18.473-9.033 22.217-17.09 0-37.272-2.197-60.547-6.592s-40.202-10.01-50.781-16.846c-.163-3.58-.244-8.707-.244-15.381 0-31.738 3.743-61.849 11.23-90.332.651-2.604 3.418-5.859 8.301-9.765 4.883-4.069 9.277-6.104 13.184-6.104 3.743 17.904 10.416 35.889 20.019 53.955 9.766 18.067 20.752 33.366 32.959 45.899 12.37 12.37 24.007 20.019 34.912 22.949z"
                fill="#1F2937"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="512" height="512" rx="90" fill="#fff" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </Link>
      <div className="flex items-center gap-6">
        {/* github */}
        <a href="https://github.com/farhan2077/symbol-search">
          <svg
            className="w-8 h-8 text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            strokeWidth="2"
            display="block"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
            />
          </svg>
        </a>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
