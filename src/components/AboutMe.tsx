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
        I'm a first-year computer science student with experience in{" "}
        <span style={{ color: "rgb(209, 123, 91)" }}>
          full-stack development
        </span>{" "}
        , <span style={{ color: "rgb(209, 123, 91)" }}>iOS development</span>,{" "}
        and{" "}
        <span style={{ color: "rgb(209, 123, 91)" }}>automation testing</span>.
        I was previously a coding tutor and have taught intermediate Java
        courses at <a href="https://www.codingpals.org/">Coding Pals</a>. I'm
        always interested to learn more about math and computer science - from
        statistics to machine learning.
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
