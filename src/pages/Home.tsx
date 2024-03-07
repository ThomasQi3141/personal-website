import AboutButton from "../components/AboutButton";
import AboutMe from "../components/AboutMe";
import Background from "../components/Background";
import LandingText from "../components/LandingText";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const scrollToAbout = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  const navigate = useNavigate();
  const toProjects = () => {
    navigate("/projects");
  };
  const toContact = () => {
    navigate("/contact");
  };
  return (
    <div className="home">
      <Background />
      <LandingText />
      <AboutButton onClick={scrollToAbout} />
      <AboutMe toProjects={toProjects} toContact={toContact} />
      <Navbar />
    </div>
  );
};

export default Home;
