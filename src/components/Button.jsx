import React from "react";

const Button = ({ cls, text, border }) => {
  return (
    <div className="">
      {border ? (
        <button
          className={`border border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400 hover:cursor-pointer transition px-2 py-1 rounded ${cls}`}
        >
          {text}
        </button>
      ) : (
        <button
          className={`border bg-orange-400 text-white px-2 py-1 rounded ${cls}`}
        >
          {text}
        </button>
      )}
    </div>
  );
};
export default Button;
