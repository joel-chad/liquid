import React from "react";
import Container from "./Container";

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-2 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.pretitle && (
        <span className="inline-block px-3  text-xs font-semibold text-green-900 bg-green-50 rounded-full">
          {props.pretitle}
        </span>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}

export default SectionTitle;