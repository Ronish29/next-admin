import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = ({ color = "#ffffff" }) => {
  return (
    <ThreeDots
      visible={true}
      height="20"
      width="30"
      color={color}
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
