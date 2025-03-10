import React from "react";
import ListedOnSwiper from "../../ui/swiper/listed";
import { LoadedProps } from ".";

export default function ListedExchange({ isLoaded }: LoadedProps) {
  return (
    <div
      className={`absolute bottom-10 z-50 w-full transition-all delay-700 duration-1000 sm:relative sm:bottom-5 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
    >
      <ListedOnSwiper />
    </div>
  );
}
