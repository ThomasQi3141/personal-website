import Navbar from "../components/Navbar";
import resume_jan from "../assets/Resume_Jan_2024.pdf";
import "./Resume.css";

const Resume = () => {
  return (
    <>
      <iframe src={resume_jan} className="resume-file"></iframe>
      <Navbar />
    </>
  );
};

export default Resume;
