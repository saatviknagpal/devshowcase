import React from "react";
import Head from "next/head";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <div className="flex justify-center items-center overflow-hidden min-h-screen bg-gradient-to-l from-[#0ED2F7] to-[#094FFF]">
        <Head>
          <title>Signup Page</title>
        </Head>

        <div className="flex flex-row justify-center items-center bg-white w-11/12 lg:w-3/5 xl:w-1/2 shadow-xl rounded-xl">
          <div className="md:flex flex-row md:justify-between ">
            <div className="hidden md:block w-3/5 ">
              <img
                src="/images/thumbnail.svg"
                className="h-full object-cover rounded-tl-xl rounded-bl-xl"
                alt=""
              />
            </div>
            <form className="flex flex-col items-center w-full md:w-2/5 p-5 relative">
              <img
                src="/images/logo.png"
                alt=""
                className="w-3/5 md:w-4/5 mt-3"
              />
              <h1 className="font-bold text-2xl md:text-xl">
                Create a new Account
              </h1>
              <div className="p-4 m-6 text-center space-y-5">
                <div className="relative border-solid border border-[#BCBCBC] rounded-md p-1 space-x-9">
                  <Icon
                    icon="cil:send"
                    color="#ccc"
                    className="pointer-events-none  w-6 h-6 absolute"
                  />
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Your Email"
                    className="ml-5 focus:outline-none"
                  />
                </div>

                <div className="relative border-solid border border-[#BCBCBC] rounded-md p-1 space-x-9">
                  <Icon
                    icon="ic:baseline-account-circle"
                    color="#3770ff"
                    className="pointer-events-none  w-6 h-6 absolute"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Name"
                    className="ml-5 focus:outline-none"
                  />
                </div>

                <div className="relative border-solid border border-[#BCBCBC] rounded-md p-1 space-x-9">
                  <Icon
                    icon="bx:lock-alt"
                    color="#ccc"
                    className="pointer-events-none  w-6 h-6 absolute text-gray-300"
                  />
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Create Password"
                    className="ml-5 focus:outline-none"
                  />
                </div>
                <p className="text-[#8C8C8C] text-md md:text-xs md:font-semibold">
                  By signing up, confirm that you’ve read and accepted our{" "}
                  <a className="text-[#3770FF]">User Notice</a> and{" "}
                  <a className="text-[#3770FF]">Privacy Policy</a>
                </p>
              </div>
              <input
                type="submit"
                value="Register"
                className="bg-[#3770FF] w-3/4 text-white p-2 rounded-lg cursor-pointer hover:bg-[#2160ff]"
              />
              <p className="text-gray-400 mt-4">OR</p>
              <button className="flex flex-row space-x-2 mt-3 border-solid border border-[#DFD7D7] rounded-md p-2 mb-10 hover:bg-gray-100">
                <Icon icon="flat-color-icons:google" className="w-6 h-6" />
                <p>Continue with Google</p>
              </button>
              <Link href="/login">
                <button className="absolute bottom-0 bg-[#F6F6F6] text-[#3770FF] font-semibold w-10/12 rounded-xl md:w-full rounded-br-xl">
                  Already having an account? Log In
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
