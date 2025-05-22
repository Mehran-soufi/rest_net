"use client";
import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";

// import required modules
import { Controller, EffectCards, EffectCreative } from "swiper/modules";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface TypeCountry {
  title: string;
  text: string;
  img: string;
}

const CountryInfromationItem: TypeCountry[] = [
  {
    title: "France",
    text: "France is one of the most culturally influential countries in the world, known for its art, architecture, cuisine, and history. Paris, the capital, is famous for its Eiffel Tower, Louvre Museum, and iconic cafés that have inspired generations of writers and artists. Beyond Paris, France offers diverse landscapes, from the lavender fields of Provence to the snow-capped peaks of the Alps. The French Riviera boasts glamorous coastal towns like Nice and Cannes, while the wine regions of Bordeaux and Burgundy produce some of the finest wines globally. French cuisine, featuring dishes like croissants, escargots, and ratatouille, is a cornerstone of culinary excellence. The country’s rich history includes the French Revolution, Napoleon's empire, and a long tradition of artistic and literary contributions. Whether exploring medieval castles, relaxing in countryside vineyards, or enjoying haute couture in Paris, France seamlessly blends tradition with modern elegance.",
    img: "/assets/country/france.jpg",
  },
  {
    title: "Canada",
    text: "Canada is the second-largest country in the world, covering vast forests, mountains, and Arctic tundra. It is known for its breathtaking landscapes, including the Rocky Mountains, Niagara Falls, and over two million lakes. Toronto, Vancouver, and Montreal are vibrant cities that showcase Canada’s multiculturalism, blending cultures from around the globe. Canada is famous for its cold winters, with activities like ice hockey, skiing, and dog sledding being deeply embedded in its national identity. The country has a strong commitment to environmental conservation, with national parks such as Banff and Jasper preserving its natural beauty. Canada also has a rich indigenous heritage, with First Nations, Métis, and Inuit cultures contributing to the nation’s identity. The country is bilingual, with English and French as official languages. Whether enjoying maple syrup, spotting polar bears in the north, or exploring the dynamic city life, Canada offers a unique and diverse experience.",
    img: "/assets/country/canada.jpg",
  },
  {
    title: "Brazil",
    text: "Brazil, the largest country in South America, is known for its vibrant culture, passionate football fans, and stunning landscapes. Home to the Amazon rainforest, Brazil possesses the most biodiverse ecosystem on Earth, with thousands of unique plant and animal species. Cities like Rio de Janeiro and São Paulo are bustling metropolises full of music, art, and dynamic nightlife. The annual Carnival festival, held in Rio, showcases colorful parades, samba performances, and extravagant costumes, drawing millions of visitors. Brazil is also famous for its beaches, such as Copacabana and Ipanema, where locals enjoy sun-soaked days and lively gatherings. Brazilian cuisine is diverse, with dishes like feijoada, a rich black bean stew, and pão de queijo, delicious cheese bread. Football is a national obsession, with Brazil producing some of the world’s greatest players, including Pelé and Neymar. The country’s warm climate, welcoming people, and beautiful scenery make it an unforgettable destination.",
    img: "/assets/country/brazil.jpg",
  },
  {
    title: "Germany",
    text: "Germany is a country known for its rich history, engineering prowess, and picturesque landscapes. Berlin, the capital, is a hub of modern art, music, and nightlife, with remnants of the Berlin Wall serving as a powerful historical reminder. Germany is home to stunning castles, such as Neuschwanstein, which inspired Disney’s Cinderella castle. The Bavarian Alps offer breathtaking scenery and winter sports opportunities, while cities like Munich host the world-famous Oktoberfest, celebrating traditional German beer and cuisine. German culture is deeply rooted in literature and philosophy, with figures like Goethe, Nietzsche, and Beethoven shaping global thought and art. The country has one of the strongest economies in Europe and is known for its automotive industry, with brands like BMW, Mercedes-Benz, and Volkswagen leading innovation. Whether exploring medieval towns, enjoying hearty German dishes like bratwurst and pretzels, or delving into history, Germany provides a unique and enriching experience.",
    img: "/assets/country/germany.jpg",
  },
  {
    title: "Italy",
    text: "Italy is a country synonymous with art, architecture, fashion, and cuisine. Rome, the capital, is home to ancient landmarks such as the Colosseum, the Vatican, and the Sistine Chapel, showcasing centuries of history. Florence, the heart of the Renaissance, boasts masterpieces from Michelangelo and Leonardo da Vinci, while Venice enchants visitors with its romantic canals. Italian cuisine is one of the most beloved worldwide, with pizza, pasta, and gelato being staples of daily life. The country is also famous for its wine regions, including Tuscany, which produces some of the finest wines globally. Italian fashion houses like Gucci, Prada, and Versace have shaped the industry for decades. Whether strolling through historic ruins, enjoying a gondola ride, or indulging in world-class cuisine, Italy offers an unforgettable journey through beauty, tradition, and culture.",
    img: "/assets/country/italy.jpg",
  },
  {
    title: "Japan",
    text: "Japan is a country that perfectly balances ancient traditions with modern innovation. Tokyo, the capital, is a futuristic metropolis filled with towering skyscrapers, high-speed trains, and cutting-edge technology. Kyoto, on the other hand, preserves the country’s traditional heritage with its historic temples, geisha culture, and serene gardens. Japanese cuisine is adored worldwide, featuring sushi, ramen, tempura, and matcha-based delicacies. The country is known for its cherry blossoms, which bloom each spring, creating breathtaking scenery. Japan’s rich history includes samurai warriors, shogunate rule, and centuries of artistic refinement, seen in its calligraphy, tea ceremonies, and kabuki theater. The country is also a leader in entertainment, with anime and video games shaping global pop culture. Whether exploring the bustling streets of Tokyo, hiking Mount Fuji, or soaking in a tranquil hot spring, Japan offers a dynamic and unforgettable experience.",
    img: "/assets/country/japan.jpg",
  },
  {
    title: "Russia",
    text: "Russia is the largest country in the world, spanning across Europe and Asia. With its vast landscapes, it includes everything from the icy tundras of Siberia to the beautiful shores of the Black Sea. Moscow, the capital, is home to the Kremlin, Red Square, and Saint Basil's Cathedral, showcasing its deep-rooted history and unique architectural style. Saint Petersburg, often called Russia’s cultural capital, boasts stunning palaces, museums, and canals reminiscent of Venice. Russia has a strong literary and artistic heritage, with renowned figures like Tolstoy, Dostoevsky, and Tchaikovsky influencing global culture. The country is also known for its space program, launching the first human, Yuri Gagarin, into orbit. Traditional Russian cuisine includes dishes such as borscht, blini, and pelmeni, reflecting the country’s diverse influences. Whether exploring ancient cities, breathtaking natural wonders like Lake Baikal, or its rich traditions, Russia offers a fascinating journey through history and innovation.",
    img: "/assets/country/russia.jpg",
  },
  {
    title: "Thailand",
    text: "Thailand is a tropical paradise in Southeast Asia known for its vibrant cities, stunning beaches, and rich cultural heritage. Bangkok, the capital, is a bustling metropolis filled with ornate temples, floating markets, and a lively street food scene. The Grand Palace and Wat Arun are among its most famous landmarks, showcasing traditional Thai architecture. The country’s islands, such as Phuket, Koh Samui, and Krabi, offer crystal-clear waters, white sandy beaches, and opportunities for diving and snorkeling. Thailand is also famous for its flavorful cuisine, featuring dishes like pad Thai, green curry, and mango sticky rice. The country has a deep-rooted tradition of Buddhist practices, with numerous temples and meditation retreats. Festivals like Songkran, the Thai New Year, bring a sense of joy and community through water celebrations. Whether experiencing the electrifying nightlife, exploring ancient ruins, or relaxing in nature, Thailand provides an unforgettable adventure.",
    img: "/assets/country/thailand.jpg",
  },
  {
    title: "Turkey",
    text: "Turkey is a country where East meets West, offering a unique blend of history, culture, and landscapes. Istanbul, its largest city, is famous for its breathtaking architecture, including the Hagia Sophia, Blue Mosque, and Topkapi Palace. The Bosphorus Strait divides the city between Europe and Asia, making it one of the few places in the world that spans two continents. Cappadocia, known for its surreal rock formations and hot air balloon rides, is a must-visit destination. The country has a rich culinary heritage, with dishes such as kebabs, baklava, and Turkish tea being central to its cuisine. Turkey’s Mediterranean coastline provides stunning beaches and ancient ruins, including Ephesus and Troy. Its history is deeply tied to the Ottoman Empire, influencing architecture, traditions, and global affairs. Whether wandering through vibrant bazaars, discovering archaeological wonders, or enjoying warm hospitality, Turkey is a country full of culture and charm.",
    img: "/assets/country/turkey.jpg",
  },
  {
    title: "USA",
    text: "The United States is one of the most influential countries globally, known for its diverse landscapes, thriving cities, and cultural impact. New York City, often called 'The Big Apple,' is home to iconic landmarks such as Times Square, the Statue of Liberty, and Broadway. Washington, D.C., serves as the nation’s capital, rich in history with sites like the White House and Capitol Hill. The country’s West Coast features bustling cities like Los Angeles and San Francisco, known for Hollywood, technology, and innovation. The USA is also famous for its natural wonders, including the Grand Canyon, Yellowstone National Park, and the Great Lakes. American culture is driven by music, cinema, sports, and technology, influencing global trends. With a variety of climates and experiences, from the beaches of Florida to the mountains of Colorado, the U.S. offers something for everyone, making it one of the most diverse travel destinations.",
    img: "/assets/country/usa.jpg",
  },
  {
    title: "Switzerland",
    text: "Switzerland is a landlocked European country renowned for its breathtaking mountains, precision engineering, and high quality of life. The Swiss Alps provide stunning landscapes, making it a haven for outdoor activities such as skiing, hiking, and paragliding. Cities like Zurich and Geneva are global financial hubs, known for their stability and innovation. Switzerland is also famous for its world-class chocolates, cheeses, and luxury watches, with brands like Rolex and Omega setting industry standards. The country is recognized for its neutrality in global conflicts, making it a center for diplomacy and international organizations. The pristine lakes, charming villages, and efficient public transportation make travel seamless and enjoyable. Swiss culture blends influences from German, French, and Italian traditions, creating a rich and diverse experience. Whether exploring medieval castles, taking scenic train rides through the Alps, or indulging in gourmet delights, Switzerland is a dream destination.",
    img: "/assets/country/switzerland.jpg",
  },
];

function CountryInformation() {
  const [firstSwiper, setFirstSwiper] = useState<any>(null);
  const [secondSwiper, setSecondSwiper] = useState<any>(null);

  const handleNext = () => {
    firstSwiper?.slideNext();
  };

  const handlePrev = () => {
    firstSwiper?.slidePrev();
  };
  return (
    <div className="w-full my-4 py-8 relative overflow-hidden country_information">
      <div className="w-full flex justify-center items-center">
        <div className="w-11/12 flex flex-col justify-center items-center">
          <div className="w-full flex justify-center items-center flex-wrap">
            <div className="flex justify-center items-center lg:w-1/3 w-full lg:h-[70vh] cursor-default">
              <Swiper
                effect={"cards"}
                grabCursor={false}
                speed={1200}
                onSwiper={setFirstSwiper}
                controller={{ control: secondSwiper }}
                allowTouchMove={false}
                modules={[EffectCards, Controller]}
                className="mySwiper xl:w-72 lg:w-64 md:w-56 w-52 xl:h-80 lg:h-72 md:h-64 h-60 flex justify-center items-center"
              >
                {CountryInfromationItem.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full relative"></div>
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex justify-center items-center lg:w-2/3 w-full lg:h-[70vh] cursor-default">
              <Swiper
                grabCursor={false}
                effect={"creative"}
                speed={800}
                onSwiper={setSecondSwiper}
                controller={{ control: firstSwiper }}
                allowTouchMove={false}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: ["-220%", 0, -800],
                    rotate: [0, 0, -90],
                  },
                  next: {
                    shadow: true,
                    translate: ["220%", 0, -800],
                    rotate: [0, 0, 90],
                  },
                }}
                modules={[EffectCreative, Controller]}
                className="w-4/5 h-4/5"
              >
                {CountryInfromationItem.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-start justify-center gap-4 w-full h-full bg-transparent">
                      <h2 className="xl:text-6xl lg:text-3xl md:text-2xl text-xl text-main font-bold uppercase">
                        {item.title}
                      </h2>
                      <p className="text-justify xl:text-base text-sm">
                        {item.text}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-4">
            <button
              className="text-main text-xl cursor-pointer border-none outline-none"
              onClick={handlePrev}
            >
              <FaArrowLeftLong />
            </button>
            <button
              className="text-main text-xl cursor-pointer border-none outline-none"
              onClick={handleNext}
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryInformation;
