import React, { useEffect } from "react";
import Logo from "./logo.png";
import { Button, Card } from "./components";
import Prism from "prismjs";
import "./prism.css";
import iot from "./assets/iot.svg";
import { FaHome } from "react-icons/fa";

const App = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="lg:px-32 p-5">
      <div className="flex justify-center items-center flex-col">
        <img src={Logo} className="w-44" alt="" />
        <p className="text-2xl font-bold text-orange-500">NorthFox Group UI</p>
      </div>
      <div className="mt-10">
        <div className="flex lg:flex-row flex-col justify-between gap-5">
          <p className="text-xl font-medium">Documentation :</p>
          <input
            type="text"
            className="border border-cyan-400 p-1 px-3 rounded-md lg:w-1/5 w-full"
            placeholder="Search Component..."
          />
        </div>
        <ul className="list-disc px-4 my-5 mb-10 grid grid-cols-3">
          <li className="">
            <a href="#button" className="font-medium hover:text-orange-400">
              Button
            </a>
          </li>
          <li className="">
            <a href="#card" className="font-medium hover:text-orange-400">
              Card
            </a>
          </li>
        </ul>
        <div className="bg-slate-100 rounded p-5 my-5" id="button">
          <p className="font-medium text-cyan-400">Button</p>
          <div className="flex gap-3 items-center">
            <p className="my-3">Demo :</p>
            <Button cls="rounded-full px-5" text="Normal" />
            <Button cls="px-10 font-bold italic" text="Border" border />
          </div>
          <div>
            <p className="my-3">Usage :</p>
            <pre>
              <code className="lang-html" data-prismjs-copy="Copy">
                {`Normal : <Button cls="rounded-full px-5" text="Normal"/>
Border : <Button cls="px-10 font-bold italic" text="Border" border />`}
              </code>
            </pre>
            <p className="text-sm">
              If in any Case Tailwindcss Property Not Working. Please Add !
              before class , Like : !text-black.
            </p>
          </div>
        </div>
        <div className="bg-slate-100 rounded p-5 my-5" id="card">
          <p className="font-medium text-cyan-400">Card</p>
          <div className="flex flex-col gap-3 items-center">
            <p className="my-3">Demo :</p>
            <div className="grid grid-flow-col gap-5 w-1/2">
              <Card
                targetBlank
                heading="Normal Card"
                para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, asperiores?"
                readMore="//princu09.github.io"
                img={iot}
                imgCls="w-20"
                headingCls="italic"
                paraCls="font-medium"
                readMoreCls="!text-orange-400"
              />
              <Card
                targetBlank
                hover
                heading="Hover Effect Card"
                para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, asperiores?"
                readMore="//princu09.github.io"
                icon={<FaHome className="text-orange-400 text-5xl" />}
                iconCls="bg-pink-200"
                headingCls="italic"
                paraCls="font-medium"
                readMoreCls="!text-orange-400"
              />
            </div>
          </div>
          <div>
            <p className="my-3">Usage :</p>
            <pre>
              <code className="lang-html" data-prismjs-copy="Copy">
                {`Normal :

<Card
  targetBlank
  heading="Normal Card"
  para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, asperiores?"
  readMore="//princu09.github.io"
  img={iot}
  imgCls="w-20"
  headingCls="italic"
  paraCls="font-medium"
  readMoreCls="!text-orange-400"
/>

Border :

<Card
  targetBlank
  hover
  heading="Hover Effect Card"
  para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, asperiores?"
  readMore="//princu09.github.io"
  headingCls="italic"
  paraCls="font-medium"
  readMoreCls="!text-orange-400"
  iconCls="bg-pink-200"
  icon={<FaHome className='text-orange-400 text-5xl' />}
/>
              `}
              </code>
            </pre>
            <p className="text-sm">
              If in any Case Tailwindcss Property Not Working. Please Add !
              before class , Like : !text-black.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
