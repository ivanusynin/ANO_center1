import { About } from "./_components/about";
import { Activities } from "./_components/activities";
import { Contacts } from "./_components/contacts";
import { Doctors } from "./_components/doctors";
import { Events } from "./_components/events";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";

export default function IndexPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Activities />
        <Doctors />
        <Events />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
