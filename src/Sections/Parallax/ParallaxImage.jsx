import { Parallax } from "react-parallax";
import "./ParallaxImage.css";
const ParallaxImage = () => {
  return (
    <div>
      <Parallax bgImage="https://i.ibb.co/dpqb9MS/b-2.jpg" strength={300}>
        <div style={{ height: 500 }} className="flex items-center">
          <div className="parallax-2 w-1/2"></div>
          <div className="parallax-1 w-1/2 flex flex-col gap-y-10">
            <h1 className="text-4xl font-extrabold text-gray-600">
              Intro Class to Enroll
            </h1>
            <div className="grid grid-flow-col gap-2 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 15 }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                hours
              </div>
              <div className="time-24 flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                min
              </div>
              <div className="time-28 flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 28 }}></span>
                </span>
                sec
              </div>
            </div>
            <button
              onClick={() => {
                alert("This Class is coming soon.");
              }}
              className="btn btn-parallax glass w-1/2 text-white"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxImage;
