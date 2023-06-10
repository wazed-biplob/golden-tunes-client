import PopularClasses from "../../Sections/PopularClasses/PopularClasses";
import PopularInstructors from "../../Sections/PopularInstructors/PopularInstructors";
import Slider from "../../Sections/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <PopularClasses />
      <PopularInstructors />
    </div>
  );
};

export default Home;
