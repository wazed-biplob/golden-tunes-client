import { useContext, useEffect, useState } from "react";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import "./PopularInstructors.css";
import InstructorCard from "../../Components/InstructorCard/InstructorCard";
import { AuthContext } from "../../Providers/AuthProviders";

const PopularClasses = () => {
  const [instructors, setInstructors] = useState([]);
  const { loading } = useContext(AuthContext);
  console.log(instructors);
  useEffect(() => {
    fetch(`https://golden-tunes-server.vercel.app/popular-instructors`)
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);
  return (
    <>
      <SectionHeading heading={`Popular Instructors`} />
      <div
        style={{ justifyItems: "center" }}
        className="popular-instructor grid grid-cols-3 gap-4 mt-10 mb-4"
      >
        {instructors?.map((instructor, i) => (
          <InstructorCard key={i} instructor={instructor} />
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
