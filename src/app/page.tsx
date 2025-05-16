import CartItems from "@/components/CartItems";
import Hero from "@/components/Hero";
import HeroPodcast from "@/components/HeroPodcast";
import MobileApp from "@/components/MobileApp";
import Symbol from "@/components/Symbol";

export default function Home() {
  return (
    <section className="w-full relative">
      <Hero />
      <Symbol />
      <CartItems title="popular tour" />
      <HeroPodcast />
      <MobileApp/>
    </section>
  );
}
