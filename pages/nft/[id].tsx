import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const NFTDropPage = () => {
  //Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  // ---

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-10">
      <div className="left-section bg-gradient-to-br from-cyan-800 to-rose-500 lg:h-screen lg:col-span-4">
        <div className="left-content-wrapper flex flex-col h-full items-center justify-center py-2">
          <div className="image-wrapper bg-gradient-to-br from-yellow-400 to-purple-600 rounded-lg">
            <img src="/images/00.png" alt="" className="p-2 w-44" />
          </div>
          <div className="content-wrapper text-center text-white p-4">
            <h1 className="uppercase text-2xl font-bold">Papafam Apes</h1>
            <h2 className="text-sm">
              A collection of papafam apes who live & breathe React!
            </h2>
          </div>
        </div>
      </div>
      <div className="right lg:col-span-6 p-8 flex flex-col">
        <header className="flex justify-between items-center">
          <h1 className="w-48 lg:w-max text-base lg:text-lg font-light capitalize">
            The{" "}
            <span className="font-extrabold cursor-pointer uppercase underline decoration-pink-600/50">
              Papafam
            </span>{" "}
            NFT marketplace
          </h1>
          <button
            className="bg-rose-400 px-4 py-2 rounded-full text-white font-bold text-xs lg:text-base"
            onClick={() => {
              address ? disconnect() : connectWithMetamask();
            }}
          >
            {address ? "Sign Out" : "Sign In"}
          </button>
        </header>

        <hr className="my-2 border" />

        {address && (
          <p className="text-rose-400 text-sm text-center">
            You're logged in with wallet{" "}
            {`${address.substring(0, 5)}.....${address.substring(
              address.length - 5
            )}`}
          </p>
        )}

        <section className="content mt-10 flex flex-col space-y-4 lg:space-y-0 items-center flex-1 lg:justify-center">
          <img
            src="/images/cover.webp"
            className="w-72 object-cover pb-10 lg:h-36"
          />
          <h1 className="text-2xl font-bold lg:text-3xl text-center">
            The PAPAFAM Ape Coding Club | NFT Drop
          </h1>
          <p className="text-green-500 text-sm lg:pt-2">
            13 / 21 NFT's claimed
          </p>
        </section>

        <button className="h-12 bg-red-600 rounded-full text-white font-bold mt-4">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
};

export default NFTDropPage;
