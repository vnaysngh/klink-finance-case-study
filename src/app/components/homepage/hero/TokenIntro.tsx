import React from "react";

const TokenIntro = ({ isLoaded }: { isLoaded: boolean }) => {
  return (
    <div className="relative z-10 mx-auto flex flex-col items-center justify-between px-6 py-12 sm:flex-row sm:px-12">
      <div
        className={`text-center transition-all duration-1000 sm:w-1/2 sm:text-left ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <h1 className="mb-6 text-4xl font-semibold tracking-[-1px] sm:text-7xl">
          <div className="text-klink-purple relative inline-block">
            $KLINK
            <span className="absolute -inset-1 block animate-pulse bg-gradient-to-r from-[#674EFF]/20 to-[#714EBD]/20 blur-lg"></span>
          </div>
          <div
            className={`transition-all delay-300 duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            The AI-powered infrastructure for Web3 earnings
          </div>
        </h1>
        <div
          className={`flex justify-center gap-2 transition-all delay-500 duration-700 sm:justify-start sm:gap-4 ${isLoaded ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        >
          <button className="rounded-full border border-[#9A8AFE] bg-gradient-to-r from-[#674EFF] to-[#714EBD] px-4 py-2 text-base font-semibold text-white shadow-[inset_0px_1.15px_20.39px_0px_#FFFFFF6E] transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-purple-400 sm:px-6 sm:py-4">
            Buy $KLINK
          </button>
          <button className="hover:bg-opacity-20 rounded-full border border-[#9A8AFE80] px-4 py-2 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-purple-500 sm:px-6 sm:py-4">
            Stake $KLINK
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenIntro;
