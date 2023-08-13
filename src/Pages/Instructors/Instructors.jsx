import { useEffect, useState } from "react";
import InstructorCard from "../../Components/InstructorCard/InstructorCard";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  console.log(instructors);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://golden-tunes-server.vercel.app/instructors`)
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {" "}
      <SectionHeading heading={`Instructors`} />{" "}
      {isLoading ? (
        <div
          className="flex justify-center items-center"
          style={{ height: "100vh", width: "100vw" }}
        >
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <>
          {" "}
          <div className="grid grid-cols-3 gap-4 py-10">
            {instructors?.map((instructor, i) => (
              <InstructorCard key={i} instructor={instructor} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Instructors;
