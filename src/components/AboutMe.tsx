import "./AboutMe.css";

interface Props {
  toProjects: () => void;
  toContact: () => void;
}

const AboutMe = ({ toProjects, toContact }: Props) => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        I'm a first-year computer science student with experience in full-stack
        and iOS development with an interest in machine learning and computer
        vision. I was previously a coding tutor at{" "}
        <a href="https://www.codingpals.org/" target="_blank">
          Coding Pals
        </a>
        , and I'm currently working as a full-stack developer at{" "}
        <a href="https://www.atomic.dev/" target="_blank">
          Atomic
        </a>
        <br /> <br />
        Feel free to reach out to me through the{" "}
        <a onClick={toContact}>contact</a> page :D
        <br />
        <br />
        While you're at it, check out some of my cool{" "}
        <a onClick={toProjects}>projects</a> :{")"}
        <br />
      </p>
    </div>
  );
};
export default AboutMe;
