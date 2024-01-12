import AboutButton from "../components/AboutButton";
import AboutMe from "../components/AboutMe";
import Background from "../components/Background";
import LandingText from "../components/LandingText";
import Navbar from "../components/Navbar";

const Home = () => {
  const scrollToAbout = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="home">
      <Background />
      <LandingText />
      <AboutButton onClick={scrollToAbout} />
      <AboutMe />
      <Navbar />
    </div>
  );
};

export default Home;
