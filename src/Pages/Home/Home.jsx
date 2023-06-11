import { useContext } from "react";
import PopularClasses from "../../Sections/PopularClasses/PopularClasses";
import PopularInstructors from "../../Sections/PopularInstructors/PopularInstructors";
import Slider from "../../Sections/Slider/Slider";
import { VarContext } from "../../Providers/VarsProviders";
import ParallaxImage from "../../Sections/Parallax/ParallaxImage";

const Home = () => {
  const { mode } = useContext(VarContext);
  return (
    <div data-theme={mode ? "dark" : "light"}>
      <Slider />
      <PopularClasses />
      <PopularInstructors />
      <ParallaxImage />
    </div>
  );
};

export default Home;
