import "./AboutButton.css";

interface Props {
  onClick: () => void;
}
const AboutButton = ({ onClick }: Props) => {
  return (
    <div>
      <section id="aboutbutton" className="demo">
        <a onClick={onClick}>
          <span></span>
          <div className="aboutbutton-text">About</div>
        </a>
      </section>
    </div>
  );
};

export default AboutButton;
