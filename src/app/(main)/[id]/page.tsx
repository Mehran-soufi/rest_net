import Add from "@/components/Add";
import ImageGallery from "@/components/ImageGallery";
import SendComment from "@/components/SendComment";
import Image from "next/image";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { IoAirplaneOutline, IoShareSocialOutline } from "react-icons/io5";
import { LiaHourglassEndSolid, LiaHourglassStartSolid } from "react-icons/lia";
import { MdOutlineLocationOff, MdOutlineLocationOn } from "react-icons/md";
import { notFound } from "next/navigation";

interface PageProps {
  params: { id: string };
}


export default function OneProduct({ params }: PageProps) {
    const { id } = params;

    if (!/^\d+$/.test(id)) {
     notFound();
  }
  return (
    <div className="w-full flex justify-center items-start my-8">
      <div className="w-11/12 flex flex-col justify-center items-center gap-4">
        <div className="w-full xl:h-[70vh] lg:h-[60vh] sm:h-[50vh] h-[40vh] relative">
          <div className="w-full h-full relative">
            <Image
              src="/assets/country/thailand.jpg"
              alt=""
              fill
              className="rounded-lg"
            />
          </div>
          <div className="absolute top-0 right-0 h-full px-4 py-2 bg-gradient-to-b from-white via-white/30 to-transparent">
            <div className="w-full h-full flex flex-col justify-start items-center gap-4 select-none">
              <p className="flex gap-2 items-center font-bold">
                <span className="text-amber-300">
                  <FaStar />
                </span>
                4
              </p>
              <p className="flex gap-2 items-center font-bold">
                <span className="text-cyan-600">
                  <IoShareSocialOutline />
                </span>
                20
              </p>
              <p className="flex gap-2 items-center font-bold">
                <span className="text-rose-600">
                  <FaHeart />
                </span>
                20
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start lg:flex-row flex-col w-full xl:gap-8 lg:gap-6 gap-4">
          <div className="lg:w-3/4 w-full p-4 shadow-md shadow-slate-300 rounded-lg">
            {/* hero */}
            <div className="w-full flex justify-between items-center p-2">
              <h1 className="xl:text-3xl sm:text-xl text-lg font-bold">
                Thailand the buetuful country for passengers
              </h1>
              <ul className="flex items-center bg-slate-100 rounded-md p-1">
                <li className="px-3 py-1 flex justify-center items-center border-r-2 border-slate-300">
                  <button className="border-none outline-none text-lg text-main cursor-pointer ">
                    <FaRegHeart />
                  </button>
                </li>
                <li className="px-3 py-1 flex justify-center items-center">
                  <button className="border-none outline-none text-lg text-main cursor-pointer">
                    <IoShareSocialOutline />
                  </button>
                </li>
              </ul>
            </div>
            {/* Description */}
            <div className="w-full flex flex-col items-start gap-1 py-2 border-t border-slate-300">
              <h3 className="text-main font-bold uppercase">Description:</h3>
              <p className="py-1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi eveniet, architecto natus veniam culpa doloribus omnis
                iusto consequuntur error nostrum esse in quidem repellat modi
                debitis officiis nulla. Ratione facere asperiores quisquam
                maiores repellat ullam, consectetur quia cum aliquid nobis ea ab
                possimus mollitia eligendi repellendus est quibusdam odio modi
                praesentium pariatur! Incidunt dicta quod necessitatibus impedit
                cumque itaque, vel laborum adipisci. Veniam atque ipsa eveniet
                reprehenderit? Modi consectetur voluptatem minima ducimus
                maiores, consequuntur iure voluptates praesentium nobis qui
                debitis dignissimos quam! Obcaecati at culpa minus laborum
                excepturi, nemo alias dolores aut molestias vero! Officia
                dolorum dolore laborum eligendi harum.
              </p>
            </div>
            {/* Information */}
            <div className="w-full flex flex-col items-start gap-1 py-2 border-t border-slate-300">
              <h3 className="text-main font-bold uppercase">Information:</h3>
              <div className="w-full flex flex-wrap justify-between items-center my-4">
                <p className="flex items-center justify-start py-2 font-bold md:flex-1/2 flex-auto">
                  <LiaHourglassStartSolid size={20} className="text-main" />
                  Move date:
                  <span className="font-light px-1">12/05/2025</span>
                </p>
                <p className="flex items-center md:justify-end justify-start py-2 font-bold md:flex-1/2 flex-auto">
                  <LiaHourglassEndSolid size={20} className="text-main" />
                  Return date:
                  <span className="font-light px-1">12/05/2025</span>
                </p>
                <p className="flex items-center justify-start py-2 font-bold md:flex-1/2 flex-auto">
                  <MdOutlineLocationOn size={20} className="text-main" />
                  Country of origin:
                  <span className="font-light px-1">Iran</span>
                </p>
                <p className="flex items-center md:justify-end justify-start py-2 font-bold md:flex-1/2 flex-auto">
                  <MdOutlineLocationOff size={20} className="text-main" />
                  Destination country:
                  <span className="font-light px-1">Thailand</span>
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col items-start gap-1 py-2 border-t border-slate-300">
              <h3 className="text-main font-bold uppercase">Rules:</h3>
              <ul className="flex flex-col w-full gap-1 list-disc px-4 my-4">
                <li>
                  It is mandatory to bring valid identification documents.
                </li>
                <li>
                  It is mandatory to be at the airport 2 hours before the
                  domestic flight.
                </li>
                <li>
                  Ensure that your baggage complies with airline weight and size
                  restrictions.
                </li>
                <li>
                  Carry essential travel items such as medications, chargers,
                  and travel insurance documents.
                </li>
                <li>
                  Follow all security guidelines, including restrictions on
                  liquids and prohibited items.
                </li>
                <li>
                  Check the weather conditions of your destination and plan
                  accordingly.
                </li>
                <li>
                  Keep a digital or physical copy of your flight details and
                  booking confirmation.
                </li>
              </ul>
            </div>
            {/* Facilities */}
            <div className="w-full flex flex-col items-start gap-1 py-2 border-t border-slate-300">
              <h3 className="text-main font-bold uppercase">Facilities:</h3>
              <ul className="flex flex-col w-full gap-1 list-disc px-4 my-4">
                <li>
                  Enjoy a complimentary activity such as a sightseeing tour or
                  local adventure.
                </li>
                <li>
                  Free airport transfers for a smooth and hassle-free arrival
                  and departure.
                </li>
                <li>
                  Luxury hotel accommodations with high-end amenities and
                  breakfast included.
                </li>
                <li>
                  Personal travel guide to explore the destination with expert
                  recommendations.
                </li>
                <li>
                  Exclusive entertainment programs like nature excursions and
                  city tours.
                </li>
                <li>
                  Travel insurance to ensure peace of mind during the entire
                  journey.
                </li>
              </ul>
            </div>
            {/* travel detail */}
            <div className="w-full flex justify-center items-center gap-4 py-8 border-t border-slate-300">
              <div className="flex flex-col items-center gap-1">
                <IoAirplaneOutline className="text-xl text-[#ee3f44]" />
                <span className="uppercase font-bold">Iran</span>
                <span className="text-sm">12/05/2025</span>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="xl:w-20 md:w-16 w-12 xl:h-16 md:h-12 h-10"
              >
                <path
                  d="M18 2L21 5L18 8"
                  stroke="#0d4b72"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 22L3 19L6 16"
                  stroke="#0d4b72"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 5H10C6.13401 5 3 8.13401 3 12"
                  stroke="#0d4b72"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 19H14C17.866 19 21 15.866 21 12"
                  stroke="#0d4b72"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col items-center gap-1">
                <IoAirplaneOutline className="text-xl text-[#ee3f44] transform rotate-180" />
                <span className="uppercase font-bold">Thailand</span>
                <span className="text-sm">05/08/2025</span>
              </div>
            </div>
            {/* image Gallery */}
            <div className="w-full flex flex-col items-start gap-1 py-2 border-t border-slate-300">
              <h3 className="text-main font-bold uppercase">Image Gallery:</h3>
              <ImageGallery />
            </div>
            {/* comment */}
            <div className="w-full flex flex-col items-start gap-1 py-2 border-t border-slate-300">
              <h3 className="text-main font-bold uppercase">Comments:</h3>
              <div className="w-full flex justify-center items-center">
                <SendComment />
              </div>
              <div className="w-full flex flex-col gap-4 justify-center items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    className="w-11/12 flex flex-col justify-start items-center p-2 gap-1 bg-slate-50 rounded-lg"
                    key={index}
                  >
                    <div className="w-full flex items-center justify-start flex-wrap py-2">
                      <div className="w-8 h-8 rounded-full relative">
                        <Image src="/assets/user/no-img.png" alt="" fill />
                      </div>
                      <p className="text-main px-1 flex items-center">
                        Mehran
                        <span className="text-black px-1">says:</span>
                      </p>
                      <p className="font-bold px-1">wonderful</p>
                      <span className="flex items-center">
                        ( 4
                        <FaStar className="text-amber-300" />)
                      </span>
                    </div>
                    <div className="w-full border-t border-slate-300 py-2">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Repellat, consequuntur! Facere nisi a dicta minima
                        unde deleniti magni mollitia quasi harum, eum maxime
                        pariatur laudantium debitis architecto dolore
                        consectetur. Dolorum.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Add />
        </div>
      </div>
    </div>
  );
}
