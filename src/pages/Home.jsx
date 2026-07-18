import Hero from "../components/Hero";
import Categories from "../components/Categories";
import EmergencyBanner from "../components/EmergencyBanner";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <EmergencyBanner />
      <Footer />
    </>
  );
}

export default Home;