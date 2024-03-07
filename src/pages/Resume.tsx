import Navbar from "../components/Navbar";
import resume from "../assets/Resume.pdf";
import "./Resume.css";

const Resume = () => {
  return (
    <>
      <iframe src={resume} className="resume-file"></iframe>
      <Navbar />
    </>
  );
};

export default Resume;
