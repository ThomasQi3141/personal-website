import videoBG from "../assets/bg.mp4";
import "./Background.css";
const Background = () => {
  return (
    <div className="background">
      <div className="overlay"></div>
      <video className="video" src={videoBG} autoPlay loop muted />
    </div>
  );
};

export default Background;
