import { injected } from "wagmi/connectors";
import { useDisconnect, useConnect, useAccount } from "wagmi";
import { Power } from "lucide-react";

function Wallet() {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const account = useAccount();
  return (
    <>
      <div className="w-[157px] cursor-pointer rounded-[36px] border border-[#9A8AFE] bg-gradient-to-r from-[#674EFF] to-[#714EBD] px-5 py-4 text-center text-white shadow-[inset_0px_1.15px_20.39px_rgba(255,255,255,0.4)]">
        {account && account.address ? (
          <div
            onClick={() => disconnect()}
            className="flex items-center justify-center gap-2"
          >
            {`${account.address.slice(0, 4)}...${account.address.slice(-4)}`}{" "}
            <Power className="w-12" />
          </div>
        ) : (
          <div onClick={() => connect({ connector: injected() })}>
            Connect Wallet
          </div>
        )}
      </div>
    </>
  );
}

export default Wallet;
