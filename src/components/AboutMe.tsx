import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        I am an 18-year-old{" "}
        <span style={{ color: "rgb(209, 123, 91)" }}>Frontend Developer</span>{" "}
        proficient in{" "}
        <span style={{ color: "rgb(119, 152, 202)" }}>React.js</span> and
        <span style={{ color: "rgb(119, 152, 202)" }}> HTML/CSS</span> as well
        as technologies such as{" "}
        <span style={{ color: "rgb(159, 192, 146)" }}>Selenium</span> and{" "}
        <span style={{ color: "rgb(159, 192, 146)" }}>AWS</span>. I am also a
        coding tutor and have taught introductory Java courses at{" "}
        <a href="https://www.codingpals.org/">Coding Pals</a>. In my free time,
        I create personal projects, which can range from Arduino projects to
        Website Automation.
      </p>
    </div>
  );
};
export default AboutMe;
