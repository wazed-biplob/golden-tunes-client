import { useEffect, useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users/instructors`)
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 mt-10">
      {instructors?.map((instructor) => (
        <>
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img src={instructor.image} alt={instructor.name} />
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
  );
};

export default Instructors;
