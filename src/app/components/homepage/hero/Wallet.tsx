"use client";
import { injected } from "wagmi/connectors";
import { useDisconnect, useConnect, useAccount, useChainId } from "wagmi";
import { useState, useEffect } from "react";
import { Power } from "lucide-react";
import Image from "next/image";
import { networkLogos } from "@/config/constants";

function Wallet() {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const account = useAccount();
  const chainId = useChainId();

  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      setIsMetaMaskInstalled(true);
    }
  }, []);

  const handleConnect = () => {
    if (isMetaMaskInstalled) {
      connect({ connector: injected() });
    } else {
      setShowPopup(true);
    }
  };
  return (
    <>
      <div className="border-gradient-primary to-gradient-tertiary from-gradient-secondary cursor-pointer rounded-[36px] border bg-gradient-to-r px-5 py-4 text-center text-white shadow-[inset_0px_1.15px_20.39px_rgba(255,255,255,0.4)]">
        {account && account.address ? (
          <div
            onClick={() => disconnect()}
            className="flex items-center justify-center gap-2"
          >
            {networkLogos[chainId ?? 1] && (
              <Image
                src={networkLogos[chainId ?? 1]}
                alt="Network Logo"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            )}
            {`${account.address.slice(0, 4)}...${account.address.slice(-4)}`}{" "}
            <Power height={16} width={16} />
          </div>
        ) : (
          <div onClick={handleConnect}>Connect Wallet</div>
        )}
      </div>

      {/* Popup for MetaMask not found */}
      {showPopup && (
        <div className="absolute top-12 left-1/2 w-64 -translate-x-1/2 transform rounded-md bg-white p-4 text-center shadow-lg">
          <p className="font-medium text-gray-800">MetaMask not found!</p>
          <p className="text-sm text-gray-600">
            Please install MetaMask to connect your wallet.
          </p>
          <button
            onClick={() =>
              window.open("https://metamask.io/download.html", "_blank")
            }
            className="mt-3 rounded-md bg-blue-500 px-3 py-1.5 text-white"
          >
            Install MetaMask
          </button>
          <button
            onClick={() => setShowPopup(false)}
            className="mt-2 block w-full text-sm text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default Wallet;
