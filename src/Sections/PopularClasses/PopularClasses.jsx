import { useEffect, useState } from "react";
import ClassCard from "../../Components/ClassCard/ClassCard";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import "./PopularClasse.css";
const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/top-classes`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <>
      <SectionHeading
        heading={`Popular Classes`}
        subheading={`Choose Your Favourite`}
      />
      <div className="popular-classes grid grid-cols-3 gap-4 p-4">
        {classes.map((singleClass) => (
          <ClassCard key={singleClass.id} singleClass={singleClass} />
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
