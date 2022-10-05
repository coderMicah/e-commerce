import React from "react";

function PromoSection() {
  return (
    <div className="flex flex-col items-center rounded-md border py-16 mx-auto max-w-7xl  sm:px-24 lg:px-40 " >
      <h1 className="font text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Summer styles are finally here
      </h1>
      <p className="my-5 text-center text-xl text-gray-500 w-3/4">
        This year, our new summer collection will shelter you from the harsh
        elements of a world that doesn`&apos;`t care if you live or die.
        This year, our new summer collection will shelter you from the harsh
        elements of a world that doesn`&apos;`t care if you live or die.
      </p>
      <a
        href="#"
        className=" w-max inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
      >
        Shop Collection
      </a>
    </div>
  );
}

export default PromoSection;
