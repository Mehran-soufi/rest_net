import CartItems from "@/components/CartItems";
import Hero from "@/components/Hero";
import HeroPodcast from "@/components/HeroPodcast";
import MobileApp from "@/components/MobileApp";
import PopularCountry from "@/components/PopularCountry";
import Symbol from "@/components/Symbol";

export default function Home() {
  return (
    <section className="w-full relative">
      <Hero />
      <Symbol />
      <CartItems title="popular tour" />
      <PopularCountry />
      <HeroPodcast />
      <MobileApp />
    </section>
  );
}
