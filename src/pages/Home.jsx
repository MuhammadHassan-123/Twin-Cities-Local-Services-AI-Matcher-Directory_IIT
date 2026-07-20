import Hero from "../components/Hero";
import Categories from "../components/Categories";
import AIRecommendation from "../components/AIRecommendation";
import EmergencyBanner from "../components/EmergencyBanner";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <AIRecommendation />
      <EmergencyBanner />
      <Footer />
    </>
  );
}

export default Home;
