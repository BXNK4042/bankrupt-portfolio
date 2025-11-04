import Image from "next/image";
import Header from "./components/header"
import Nav from "./components/nav"
import Hero from "./components/hero"
import Footer from "./components/footer"
import About from './components/about'

export default function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
