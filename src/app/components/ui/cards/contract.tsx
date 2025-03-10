"use client";
import React, { useState, useEffect } from "react";
import { CopyCheck, Copy } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CONTRACT_ADDRESS = "0xdc5eb0fc6d3f64689290595ebe8943155ed4a73a";

export function ContractAddress() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div className="flex h-full w-1/2 items-center justify-center gap-2 bg-[#463964] px-4 text-sm text-[#A88CD9]">
      <span>{`${CONTRACT_ADDRESS.slice(0, 4)}...${CONTRACT_ADDRESS.slice(-4)}`}</span>
      <CopyToClipboard text={CONTRACT_ADDRESS} onCopy={() => setCopied(true)}>
        <span className="cursor-pointer">
          {copied ? (
            <CopyCheck width={16} height={16} />
          ) : (
            <Copy width={16} height={16} />
          )}
        </span>
      </CopyToClipboard>
    </div>
  );
}
