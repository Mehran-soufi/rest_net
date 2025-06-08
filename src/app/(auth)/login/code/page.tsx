"use client";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { FaHeadphones } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";

export default function CodeLogin() {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (/^\d$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (index < code.length - 1 && inputsRef.current[index + 1]) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  useEffect(() => {
    const nextIndex = code.findIndex((value) => value === "");
    if (nextIndex !== -1) {
      inputsRef.current[nextIndex]?.focus();
    }
  }, [code]);

  const handleSubmit = () => {
    const fullCode = code.join("");
    console.log("کد ورودی:", fullCode);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="rounded-lg shadow-md shadow-[#0d4b72] xl:py-8 p-4 xl:px-6">
        <div className="xl:w-80 sm:w-72 w-64 flex flex-col justify-center items-center gap-8">
          <Link href="/" className="relative w-40 h-14">
            <Image src="/assets/logo/rest_net.png" alt="restnet" fill />
          </Link>
          <div className="w-full flex justify-start items-center">
            <h2 className="text-main font-bold xl:text-xl text-lg">
              Resent Code
            </h2>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-3">
            <div className="w-full md:text-base text-sm">
              <p>Enter the code sent.</p>
            </div>
            <div className="w-full flex items-center justify-between gap-2 input-code">
              {code.map((value, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputsRef.current[index] = el;
                  }}
                  type="text"
                  className="w-1/5 p-2 border border-[#0d4b72] rounded-md outline-none text-center"
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  disabled={index > 0 && code[index - 1] === ""}
                />
              ))}
            </div>
            <div
              className="w-full flex justify-center items-center"
              onClick={handleSubmit}
            >
              <Button title="login" icon={<IoIosLogIn />} />
            </div>
            <div className="w-full flex items-center justify-center">
              <button className="flex items-center gap-1 cursor-pointer">
                <p>
                  <FaHeadphones />
                </p>
                <p>support</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
