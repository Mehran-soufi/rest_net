import CartItems from "@/components/CartItems";
import Colleagues from "@/components/Colleagues";
import CountryInformation from "@/components/CountryInformation";
import Hero from "@/components/Hero";
import HeroPodcast from "@/components/HeroPodcast";
import HomeBlog from "@/components/HomeBlog";
import MobileApp from "@/components/MobileApp";
import PopularCountry from "@/components/PopularCountry";
import Symbol from "@/components/Symbol";

export default function Home() {
  return (
    
    <section className="w-full relative">
      <Hero />
      <Symbol />
      <CartItems title="popular Tour" />
      <CartItems title="popular Hotol" />
      <CountryInformation />
      <PopularCountry />
      <Colleagues />
      <HomeBlog />
      <HeroPodcast />
      <MobileApp />
    </section>
  );
}
