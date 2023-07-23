import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="h-[80vh] flex flex-col justify-center items-center">
        <h1 className="header-text text-[48px] sm:text-[64px] lg:text-[96px] font-semibold mb-[16px] lg:mb-[24px] leading-[130%] text-center">
          ERROR 404
        </h1>
        <Link className="text-[16px] sm:text-[24px]" to="/">
          &larr; Back to Homepage
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
