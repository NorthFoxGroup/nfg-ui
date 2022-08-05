import React from "react";

const Card = ({
  cls,
  heading,
  para,
  readMore,
  targetBlank,
  readMoreCls,
  headingCls,
  paraCls,
  hover,
  img,
  imgCls,
  icon,
  iconCls,
}) => {
  return (
    <>
      <div
        className={
          hover
            ? `transition-colors duration-500 hover:bg-white flex flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5 ${cls}`
            : `flex flex-col items-center p-3 mb-2 shadow-lg drop-shadow-lg rounded-md lg:p-5 bg-white ${cls}`
        }
      >
        {icon !== "" && img !== "" ? (
          <div
            className={`bg-orange-200 rounded-full p-3 ${iconCls} ${imgCls}`}
          >
            <img src={img} alt="" className={`w-10 ${imgCls}`} />
            {icon}
          </div>
        ) : (
          "Please Pass Any One Image or Icon , Not Both"
        )}
        <div>
          <p
            className={`text-xl text-center font-medium my-5 text-black ${headingCls}`}
          >
            {heading}
          </p>
          <p className={`my-2 text-center ${paraCls}`}>{para}</p>
          {targetBlank ? (
            <a
              href={readMore}
              target="_blank"
              rel="noreferrer"
              className={`font-medium lg:text-sm text-cyan-500 ${readMoreCls}`}
            >
              Read More...
            </a>
          ) : (
            <a
              href={readMore}
              className={`font-medium lg:text-sm text-cyan-500 ${readMoreCls}`}
            >
              Read More...
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
