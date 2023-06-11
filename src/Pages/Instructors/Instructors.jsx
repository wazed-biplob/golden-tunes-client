import { useEffect, useState } from "react";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  console.log(instructors);
  useEffect(() => {
    fetch(`http://localhost:5000/users/instructors`)
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <>
      {" "}
      <SectionHeading heading={`Instructors`} />{" "}
      <div className="grid grid-cols-3 gap-4 mt-10">
        {instructors?.map((instructor) => (
          <>
            <div className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  // style={{ height: "300px" }}
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
          </>
        ))}
      </div>
    </>
  );
};

export default Instructors;
