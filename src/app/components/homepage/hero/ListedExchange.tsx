import React from "react";
import ListedOnSwiper from "../../ui/swiper/listed";

export default function ListedExchange({ isLoaded }: { isLoaded: boolean }) {
  return (
    <div
      className={`absolute bottom-10 z-50 w-full transition-all delay-700 duration-1000 sm:relative sm:bottom-5 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
    >
      <ListedOnSwiper />
    </div>
  );
}
