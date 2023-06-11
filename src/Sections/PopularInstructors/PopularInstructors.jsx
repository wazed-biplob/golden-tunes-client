import { useEffect, useState } from "react";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import { Fade } from "react-awesome-reveal";
import "./PopularInstructors.css";

const PopularClasses = () => {
  const [instructors, setInstructors] = useState([]);
  console.log(instructors);
  useEffect(() => {
    fetch(`http://localhost:5000/popular-instructors`)
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <>
      <SectionHeading
        heading={`Popular Instructors`}
        subheading={`Top Instructors`}
      />
      <div className="popular-instructor grid grid-cols-3 gap-4 mt-10">
        {instructors?.map((instructor) => (
          <>
            <Fade cascade damping={0.5}>
              <div className="card w-full bg-base-100 shadow-xl pt-4">
                <figure>
                  <img
                    style={{ height: "300px" }}
                    src={instructor.image}
                    alt={instructor.name}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{instructor.name}</h2>
                  <div className="badge badge-info text-white">
                    {instructor.email}
                  </div>
                </div>
              </div>
            </Fade>
          </>
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
