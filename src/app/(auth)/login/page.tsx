import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { FaHeadphones } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { MdOutlineWavingHand } from "react-icons/md";

export default function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="rounded-lg shadow-md shadow-[#0d4b72] xl:py-8 p-4 xl:px-6">
        <div className="xl:w-80 sm:w-72 w-64 flex flex-col justify-center items-center gap-8">
          <Link href="/" className="relative w-40 h-14">
            <Image src="/assets/logo/rest_net.png" alt="restnet" fill />
          </Link>
          <div className="w-full flex justify-start items-center">
            <h2 className="text-main font-bold xl:text-xl text-lg">
              Login | Register
            </h2>
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-3">
            <div className="w-full flex items-center justify-start gap-1 md:text-base text-sm">
              <p>Hi</p>
              <p className="text-amber-600">
                <MdOutlineWavingHand />
              </p>
            </div>
            <div className="w-full md:text-base text-sm">
              <p>Please enter your mobile number.</p>
            </div>
            <div className="w-full">
              <input
                type="text"
                className="w-full p-2 border border-[#0d4b72] rounded-md outline-none"
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
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
  );
}
