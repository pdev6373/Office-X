import { Header } from "../src/components/header/header";
import { Hero } from "../src/components/hero/hero";
import { About } from "../src/components/about/about";
import { Facilities } from "../src/components/facilities/facilities";
import { Coverletter } from "../src/components/coverletter/coverletter";
import { Contact } from "../src/components/contact/contact";

export default function Home() {
  return (
    <main className="home">
      <Header />
      <Hero />
      <About />
      <Facilities />
      {/* <Coverletter /> */}
      <Contact />
    </main>
  );
}
