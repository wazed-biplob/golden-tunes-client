import { Parallax } from "react-parallax";
import "./ParallaxImage.css";
const ParallaxImage = () => {
  return (
    <div>
      <Parallax strength={300}>
        <div
          style={{
            height: 500,
            backgroundImage: "linear-gradient(to left, black, black)",
          }}
          className="flex items-center"
        >
          <div className="parallax-2 w-1/2 px-4">
            <img
              className=""
              src="https://i.ibb.co/vzFXb9L/Intro-Class-Image.jpg"
              alt="picture"
            />
          </div>
          <div className="parallax-1 w-1/2 h-[400px] md:h-auto flex flex-col gap-y-10 p-2">
            <h1 className="text-4xl font-extrabold text-gray-600">
              Free Intro Class
            </h1>
            <p className="px-2">
              Discover the magic of music in our complimentary introductory
              class, where we guide you through the melody-rich world, igniting
              your passion for harmonies.
            </p>
            <div className="grid grid-flow-col gap-2 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 12 }}></span>
                </span>
                Months
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 10 }}></span>
                </span>
                Days
              </div>
              <div className="time-24 flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 24 }}></span>
                </span>
                hours
              </div>
              <div className="time-28 flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": 28 }}></span>
                </span>
                mins
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
