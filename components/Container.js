import React from "react";

export default function Container({ children }) {
  return (
    <div className="px-2 md:container md:mx-auto md:px-12 lg:px-32">
      {children}
    </div>
  );
}
