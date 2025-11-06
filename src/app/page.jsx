import React from "react";
import Image from "next/image"
import Bank from "../../public/bank.png"
import Stack from "../../public/front.png"

export default function Home() {
  return (
    <div className="mx-20 flex justify-center">
      <div className="grid grid-cols-1 gap-y-10">
        <Image src={Bank} alt={"bankrupt-profile"}/>
        <div className="flex flex-col">
          <p className="text-lg">Hi, I am</p>
          <h1 className="text-4xl">Web Developer</h1>
          <p className="text-lg">My name is Parinthon Kongthong, you can call me "Bank"
          and this is my personal portfolio, please enjoy.</p>
          <div className="flex">
            <p className="w-1/2"></p>
            <p className="w-1/2 text-sm text-right">"Your time is limited, so don’t waste it living someone else’s life."
            — Steve Jobs</p>
          </div>
        </div>
        <Image className="mt-15" src={Stack}/>
        <div className="mb-20">
          <h1 className="text-2xl">About Me</h1>
          <p className="text-lg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m a Frontend Developer passionate about crafting smooth, responsive and user-friendly web experiences. I love turning ideas into interactive designs using HTML, CSS, JavaScript, and modern frameworks like React. My focus is on building pixel-perfect interfaces that not only look great but also perform seamlessly across devices.</p>
        </div>
      </div>
    </div>
  );
}
